import { UserServiceHandlers } from '@pb/user/UserService';
import { user_service } from './user.service';

const handler = async (req, res, func, wrapper = false) => {
  try {
    const response = await func(req.request);
    if (wrapper) {
      return res(null, { value: response });
    }
    res(null, response);
  } catch (error) {
    console.log('handler error', error);
    res({ message: error.message, name: error.name });
  }
};

export const user_contoller: UserServiceHandlers = {
  RegisterUser: (req, res) => handler(req, res, user_service.register_user),
  LoginUser: (req, res) => handler(req, res, user_service.login_user),
  ChangePassword: (req, res) => handler(req, res, user_service.change_password),
  ForgotPassword: (req, res) => handler(req, res, user_service.forgot_password),
  ChangePasswordFromForgot: (req, res) =>
    handler(req, res, user_service.change_password_from_forgot),
  FindOne: (req, res) => handler(req, res, user_service.find_one),
  IsAdmin: (req, res) => handler(req, res, user_service.is_admin),
  me: (req, res) => handler(req, res, user_service.me),
  //@ts-ignore
  GetUsers: (call) => user_service.get_users(call.request, call),
  IncreaseTotalDrive: (req, res) =>
    handler(req, res, user_service.increase_total_drive),
  IncreaseUsedSize: (req, res) =>
    handler(req, res, user_service.increase_used_size),
};
