import * as bytes from 'bytes';
import * as argon2 from 'argon2';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true, default: null })
  verify_code: number;

  @Column({ nullable: false, default: 0 })
  invalid_verify_code: number;

  @Column('int', { array: true, nullable: false, default: [] })
  verify_code_send_time: number[];

  @Column({ nullable: false, default: 0 })
  used_size: number;

  @Column({ nullable: false, default: bytes('500 mb') })
  total_drive: number;

  @BeforeInsert()
  private async hashPassword() {
    this.password = await argon2.hash(this.password);
  }
}
