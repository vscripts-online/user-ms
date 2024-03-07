import { UInt32Value__Output } from '@pb/google/protobuf/UInt32Value';
import { UserChangePasswordFromForgotPasswordRequestDTO__Output } from '@pb/user/UserChangePasswordFromForgotPasswordRequestDTO';
import { UserChangePasswordRequestDTO__Output } from '@pb/user/UserChangePasswordRequestDTO';
import { UserFineOneDTO__Output } from '@pb/user/UserFineOneDTO';
import { UserForgotPasswordRequestDTO } from '@pb/user/UserForgotPasswordRequestDTO';
import { UserRegisterRequestDTO__Output } from '@pb/user/UserRegisterRequestDTO';
import * as argon2 from 'argon2';
import * as ms from 'ms';
import { FindOptionsWhere } from 'typeorm';
import { queue_ms_client } from '../../config';
import { Admin, AppDataSource, User } from '../../database';
import { randomInteger } from '../../util';
import { ForgotPasswordMailParams__Output } from '@pb/queue/ForgotPasswordMailParams';
import { UserMeRequestDTO__Output } from '@pb/user/UserMeRequestDTO';

const userRepository = AppDataSource.getRepository(User);
const adminRepository = AppDataSource.getRepository(Admin);

const helpers = {
  async find_user_by(where: FindOptionsWhere<User>) {
    const user = await userRepository.findOneBy(where);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  },

  async verify_password(hashed: string, plain: string) {
    const valid = await argon2.verify(hashed, plain);
    if (!valid) {
      throw new Error('Password is invalid');
    }
    return valid;
  },

  generate_code(check: number): number {
    const code = randomInteger(100_000, 999_999);
    if (code === check) {
      return this.generate_code(check);
    }
    return code;
  },

  async send_forgot_password(params: ForgotPasswordMailParams__Output) {
    return new Promise((resolve, reject) => {
      queue_ms_client.SendForgotPasswordMail(params, (err, value) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(value);
      });
    });
  },
};

export const user_service = {
  async register_user(params: UserRegisterRequestDTO__Output) {
    const { email, password } = params;

    const exists = await userRepository.findOneBy({ email });
    if (exists) {
      throw new Error('User already exists');
    }

    const user = new User();
    user.email = email;
    user.password = password;

    const _user = await AppDataSource.manager.save(user);
    return _user;
  },

  async login_user(params: UserRegisterRequestDTO__Output) {
    const { email, password } = params;

    const user = await helpers.find_user_by({ email });
    await helpers.verify_password(user.password, password);
    delete user.password;

    return user;
  },

  async change_password(params: UserChangePasswordRequestDTO__Output) {
    const { id, current_password, password } = params;

    const user = await helpers.find_user_by({ id });
    await helpers.verify_password(user.password, current_password);
    user.password = await argon2.hash(password);
    const _user = await AppDataSource.manager.save(user);
    delete _user.password;
    return _user;
  },

  async forgot_password(params: UserForgotPasswordRequestDTO) {
    const { email } = params;

    const user = await helpers.find_user_by({ email });

    const now = Date.now();

    /** Reject if more than 3 requests have been sent in the last 24 hours. */
    const twenty_four_hours_ago = now - ms('1 day');
    const last_three_send_times = user.verify_code_send_time?.filter(
      (value) => twenty_four_hours_ago <= value * 1000,
    );
    if (last_three_send_times.length > 3) {
      throw new Error('Too many request');
    }

    if (last_three_send_times.length === 0) {
      user.verify_code_send_time = [];
      user.invalid_verify_code = 0;
    }

    const last_send_time = last_three_send_times?.[0] || 0;
    const time_diff = now - last_send_time * 1000;

    /** If last request was sent within the last 1 minute, do nothing. */
    if (time_diff < ms('1 minutes')) {
      console.log('last request was sent within the last 1 minute');
      return { success: true };
    }

    const current = Math.floor(Date.now() / 1000);

    /** If last request was sent between 1 minute and 5 minute, send same code. */
    if (ms('1 minutes') < time_diff && time_diff < ms('5 minutes')) {
      console.log('last request was sent between 1 minute and 5 minute');
      user.verify_code_send_time.unshift(current);
      await AppDataSource.manager.save(user);

      const success = await helpers.send_forgot_password({
        code: user.verify_code,
        email: user.email,
        id: user.id,
      });

      return { success, code: user.verify_code };
    }

    const code = helpers.generate_code(user.verify_code);
    user.verify_code_send_time.unshift(current);
    user.verify_code = code;
    await AppDataSource.manager.save(user);

    const success = await helpers.send_forgot_password({
      code,
      email: user.email,
      id: user.id,
    });

    return { success, code };
  },

  async change_password_from_forgot(
    params: UserChangePasswordFromForgotPasswordRequestDTO__Output,
  ) {
    const { password, code, id } = params;

    const user = await helpers.find_user_by({ id });

    if (user.invalid_verify_code > 3) {
      throw new Error('Please re-send email request');
    }

    if (user.verify_code !== code) {
      user.invalid_verify_code++;
      await AppDataSource.manager.save(user);
      throw new Error('Code is invalid');
    }

    await helpers
      .verify_password(user.password, password)
      .then(() => {
        throw new Error('New password can not be equal with current password');
      })
      .catch();

    user.password = await argon2.hash(password);
    const _user = await AppDataSource.manager.save(user);

    delete _user.password;
    return _user;
  },

  find_one(params: UserFineOneDTO__Output) {
    //@ts-ignore
    return helpers.find_user_by(params);
  },

  async is_admin(params: UInt32Value__Output) {
    const { value } = params;
    const user = await adminRepository.findOneBy({ id: value });
    return { value: !!user };
  },

  async me(params: UserMeRequestDTO__Output) {
    const { id } = params;
    const user = await helpers.find_user_by({ id });
    return user;
  },
};
