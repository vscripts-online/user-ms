import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity';
import { POSTGRES_URI } from '../config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: POSTGRES_URI,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
