import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServiceClient as _user_UserServiceClient, UserServiceDefinition as _user_UserServiceDefinition } from './user/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      BoolValue: MessageTypeDefinition
      BytesValue: MessageTypeDefinition
      DoubleValue: MessageTypeDefinition
      FloatValue: MessageTypeDefinition
      Int32Value: MessageTypeDefinition
      Int64Value: MessageTypeDefinition
      StringValue: MessageTypeDefinition
      UInt32Value: MessageTypeDefinition
      UInt64Value: MessageTypeDefinition
    }
  }
  user: {
    User: MessageTypeDefinition
    UserChangePasswordFromForgotPasswordRequestDTO: MessageTypeDefinition
    UserChangePasswordRequestDTO: MessageTypeDefinition
    UserFineOneDTO: MessageTypeDefinition
    UserForgotPasswordRequestDTO: MessageTypeDefinition
    UserRegisterRequestDTO: MessageTypeDefinition
    UserRegisterResponseDTO: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _user_UserServiceClient> & { service: _user_UserServiceDefinition }
  }
}

