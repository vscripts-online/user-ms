import { UserRegisterRequestDTO__Output } from '@pb/user/UserRegisterRequestDTO';
import { AppDataSource, User } from '../../database';
import * as argon2 from 'argon2';

const userRepository = AppDataSource.getRepository(User);

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

    const user = await userRepository.findOneBy({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      throw new Error('Password is invalid');
    }

    delete user.password;

    return user;
  },
};
