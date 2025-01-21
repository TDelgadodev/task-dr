import { IUser } from 'src/interface/user.interface';
import { BaseEntity, Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  role: string;
}
