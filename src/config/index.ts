import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'node:path';

export const POSTGRES_URI = process.env.POSTGRES_URI;
export const PORT = process.env.PORT;
export const QUEUE_MS_URI = process.env.QUEUE_MS_URI;

// Queue MS Client
import { ProtoGrpcType as QueueProtoGrpcType } from '@pb/queue';
export const QUEUE_PROTO_PATH = path.resolve('./proto/queue.proto');
const queue_packageDef = protoLoader.loadSync(QUEUE_PROTO_PATH);
const queue_proto = grpc.loadPackageDefinition(
  queue_packageDef,
) as unknown as QueueProtoGrpcType;
const QueueService = queue_proto.queue.QueueService;

export const queue_ms_client = new QueueService(
  QUEUE_MS_URI,
  grpc.credentials.createInsecure(),
);
