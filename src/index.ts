import { config } from 'dotenv';
config();

import * as grpc from '@grpc/grpc-js';
import { AppDataSource } from './database';
import { pb_services } from './constants';
import { user_contoller } from './services';
import { PORT } from './config';

async function main() {
  await AppDataSource.initialize();
  console.log('Connected to postgres');

  const server = new grpc.Server();
  server.addService(pb_services.user, user_contoller);

  server.bindAsync(
    '0.0.0.0:' + PORT,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.log('err', err);
        process.exit(1);
      }

      console.log('listening on port:', port);
    },
  );
}

main();
