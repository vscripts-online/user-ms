import * as path from 'node:path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '@pb/user';
import { proto_load_options } from '../config';

export const USER_PROTO_PATH = path.resolve('./proto/user.proto');

export const pb_services = {
  get user() {
    const packageDef = protoLoader.loadSync(
      USER_PROTO_PATH,
      proto_load_options,
    );

    const proto = grpc.loadPackageDefinition(
      packageDef,
    ) as unknown as ProtoGrpcType;

    return proto.user.UserService.service;
  },
};
