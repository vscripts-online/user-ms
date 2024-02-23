import { UserServiceHandlers } from '@pb/user/UserService';
import { user_service } from './user.service';

export const user_contoller: UserServiceHandlers = {
  RegisterUser: async (req, res) => {
    try {
      const response = await user_service.register_user(req.request);
      res(null, response);
    } catch (error) {
      res({ message: error.message, name: error.name || error.message });
    }
  },
  LoginUser: async (req, res) => {
    try {
      const response = await user_service.login_user(req.request);
      res(null, response);
    } catch (error) {
      res({ message: error.message, name: error.name || error.message });
    }
  },
};
