// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../google/protobuf/BoolValue';
import type { UserChangePasswordFromForgotPasswordRequestDTO as _user_UserChangePasswordFromForgotPasswordRequestDTO, UserChangePasswordFromForgotPasswordRequestDTO__Output as _user_UserChangePasswordFromForgotPasswordRequestDTO__Output } from '../user/UserChangePasswordFromForgotPasswordRequestDTO';
import type { UserChangePasswordRequestDTO as _user_UserChangePasswordRequestDTO, UserChangePasswordRequestDTO__Output as _user_UserChangePasswordRequestDTO__Output } from '../user/UserChangePasswordRequestDTO';
import type { UserFineOneDTO as _user_UserFineOneDTO, UserFineOneDTO__Output as _user_UserFineOneDTO__Output } from '../user/UserFineOneDTO';
import type { UserForgotPasswordRequestDTO as _user_UserForgotPasswordRequestDTO, UserForgotPasswordRequestDTO__Output as _user_UserForgotPasswordRequestDTO__Output } from '../user/UserForgotPasswordRequestDTO';
import type { UserRegisterRequestDTO as _user_UserRegisterRequestDTO, UserRegisterRequestDTO__Output as _user_UserRegisterRequestDTO__Output } from '../user/UserRegisterRequestDTO';
import type { UserRegisterResponseDTO as _user_UserRegisterResponseDTO, UserRegisterResponseDTO__Output as _user_UserRegisterResponseDTO__Output } from '../user/UserRegisterResponseDTO';

export interface UserServiceClient extends grpc.Client {
  ChangePassword(argument: _user_UserChangePasswordRequestDTO, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  ChangePassword(argument: _user_UserChangePasswordRequestDTO, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  ChangePassword(argument: _user_UserChangePasswordRequestDTO, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  ChangePassword(argument: _user_UserChangePasswordRequestDTO, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _user_UserChangePasswordRequestDTO, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _user_UserChangePasswordRequestDTO, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _user_UserChangePasswordRequestDTO, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _user_UserChangePasswordRequestDTO, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  
  ChangePasswordFromForgot(argument: _user_UserChangePasswordFromForgotPasswordRequestDTO, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  ChangePasswordFromForgot(argument: _user_UserChangePasswordFromForgotPasswordRequestDTO, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  ChangePasswordFromForgot(argument: _user_UserChangePasswordFromForgotPasswordRequestDTO, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  ChangePasswordFromForgot(argument: _user_UserChangePasswordFromForgotPasswordRequestDTO, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  changePasswordFromForgot(argument: _user_UserChangePasswordFromForgotPasswordRequestDTO, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  changePasswordFromForgot(argument: _user_UserChangePasswordFromForgotPasswordRequestDTO, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  changePasswordFromForgot(argument: _user_UserChangePasswordFromForgotPasswordRequestDTO, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  changePasswordFromForgot(argument: _user_UserChangePasswordFromForgotPasswordRequestDTO, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  
  FindOne(argument: _user_UserFineOneDTO, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _user_UserFineOneDTO, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _user_UserFineOneDTO, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _user_UserFineOneDTO, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  findOne(argument: _user_UserFineOneDTO, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  findOne(argument: _user_UserFineOneDTO, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  findOne(argument: _user_UserFineOneDTO, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  findOne(argument: _user_UserFineOneDTO, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  
  ForgotPassword(argument: _user_UserForgotPasswordRequestDTO, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_BoolValue__Output>): grpc.ClientUnaryCall;
  ForgotPassword(argument: _user_UserForgotPasswordRequestDTO, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_BoolValue__Output>): grpc.ClientUnaryCall;
  ForgotPassword(argument: _user_UserForgotPasswordRequestDTO, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_BoolValue__Output>): grpc.ClientUnaryCall;
  ForgotPassword(argument: _user_UserForgotPasswordRequestDTO, callback: grpc.requestCallback<_google_protobuf_BoolValue__Output>): grpc.ClientUnaryCall;
  forgotPassword(argument: _user_UserForgotPasswordRequestDTO, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_BoolValue__Output>): grpc.ClientUnaryCall;
  forgotPassword(argument: _user_UserForgotPasswordRequestDTO, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_BoolValue__Output>): grpc.ClientUnaryCall;
  forgotPassword(argument: _user_UserForgotPasswordRequestDTO, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_BoolValue__Output>): grpc.ClientUnaryCall;
  forgotPassword(argument: _user_UserForgotPasswordRequestDTO, callback: grpc.requestCallback<_google_protobuf_BoolValue__Output>): grpc.ClientUnaryCall;
  
  LoginUser(argument: _user_UserRegisterRequestDTO, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  LoginUser(argument: _user_UserRegisterRequestDTO, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  LoginUser(argument: _user_UserRegisterRequestDTO, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  LoginUser(argument: _user_UserRegisterRequestDTO, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _user_UserRegisterRequestDTO, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _user_UserRegisterRequestDTO, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _user_UserRegisterRequestDTO, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  loginUser(argument: _user_UserRegisterRequestDTO, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  
  RegisterUser(argument: _user_UserRegisterRequestDTO, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  RegisterUser(argument: _user_UserRegisterRequestDTO, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  RegisterUser(argument: _user_UserRegisterRequestDTO, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  RegisterUser(argument: _user_UserRegisterRequestDTO, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _user_UserRegisterRequestDTO, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _user_UserRegisterRequestDTO, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _user_UserRegisterRequestDTO, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  registerUser(argument: _user_UserRegisterRequestDTO, callback: grpc.requestCallback<_user_UserRegisterResponseDTO__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  ChangePassword: grpc.handleUnaryCall<_user_UserChangePasswordRequestDTO__Output, _user_UserRegisterResponseDTO>;
  
  ChangePasswordFromForgot: grpc.handleUnaryCall<_user_UserChangePasswordFromForgotPasswordRequestDTO__Output, _user_UserRegisterResponseDTO>;
  
  FindOne: grpc.handleUnaryCall<_user_UserFineOneDTO__Output, _user_UserRegisterResponseDTO>;
  
  ForgotPassword: grpc.handleUnaryCall<_user_UserForgotPasswordRequestDTO__Output, _google_protobuf_BoolValue>;
  
  LoginUser: grpc.handleUnaryCall<_user_UserRegisterRequestDTO__Output, _user_UserRegisterResponseDTO>;
  
  RegisterUser: grpc.handleUnaryCall<_user_UserRegisterRequestDTO__Output, _user_UserRegisterResponseDTO>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  ChangePassword: MethodDefinition<_user_UserChangePasswordRequestDTO, _user_UserRegisterResponseDTO, _user_UserChangePasswordRequestDTO__Output, _user_UserRegisterResponseDTO__Output>
  ChangePasswordFromForgot: MethodDefinition<_user_UserChangePasswordFromForgotPasswordRequestDTO, _user_UserRegisterResponseDTO, _user_UserChangePasswordFromForgotPasswordRequestDTO__Output, _user_UserRegisterResponseDTO__Output>
  FindOne: MethodDefinition<_user_UserFineOneDTO, _user_UserRegisterResponseDTO, _user_UserFineOneDTO__Output, _user_UserRegisterResponseDTO__Output>
  ForgotPassword: MethodDefinition<_user_UserForgotPasswordRequestDTO, _google_protobuf_BoolValue, _user_UserForgotPasswordRequestDTO__Output, _google_protobuf_BoolValue__Output>
  LoginUser: MethodDefinition<_user_UserRegisterRequestDTO, _user_UserRegisterResponseDTO, _user_UserRegisterRequestDTO__Output, _user_UserRegisterResponseDTO__Output>
  RegisterUser: MethodDefinition<_user_UserRegisterRequestDTO, _user_UserRegisterResponseDTO, _user_UserRegisterRequestDTO__Output, _user_UserRegisterResponseDTO__Output>
}
