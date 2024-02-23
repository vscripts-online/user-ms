// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { UserRegisterRequestDTO as _user_UserRegisterRequestDTO, UserRegisterRequestDTO__Output as _user_UserRegisterRequestDTO__Output } from '../user/UserRegisterRequestDTO';
import type { UserRegisterResponseDTO as _user_UserRegisterResponseDTO, UserRegisterResponseDTO__Output as _user_UserRegisterResponseDTO__Output } from '../user/UserRegisterResponseDTO';

export interface UserServiceClient extends grpc.Client {
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
  LoginUser: grpc.handleUnaryCall<_user_UserRegisterRequestDTO__Output, _user_UserRegisterResponseDTO>;
  
  RegisterUser: grpc.handleUnaryCall<_user_UserRegisterRequestDTO__Output, _user_UserRegisterResponseDTO>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  LoginUser: MethodDefinition<_user_UserRegisterRequestDTO, _user_UserRegisterResponseDTO, _user_UserRegisterRequestDTO__Output, _user_UserRegisterResponseDTO__Output>
  RegisterUser: MethodDefinition<_user_UserRegisterRequestDTO, _user_UserRegisterResponseDTO, _user_UserRegisterRequestDTO__Output, _user_UserRegisterResponseDTO__Output>
}
