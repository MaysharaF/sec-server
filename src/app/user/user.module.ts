import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from '../../repositories/user.repository';

import { User } from '../../database/models/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    {
      provide: 'userService',
      useClass: UserService,
    },
    {
      provide: 'userRepository',
      useClass: UserRepository,
    }
  ]
})
export class UserModule { }
