import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { IUserService } from './user.service.interface';

import { IUserRepository } from '../../repositories/interfaces/user.interface.repository';
import { User } from '../../database/models/user.entity';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject('userRepository')
    private readonly userRepository: IUserRepository,
  ) { }

  async create(payload): Promise<User> {
    const userByUsername = await this.userRepository.findOne({
      username: payload.username,
    });

    if (userByUsername) {
      throw new BadRequestException('Username já usado');
    }

    const hashedPassword = await bcrypt.hash(payload.password, 12);
    const newUser = await this.userRepository.insert({
      ...payload,
      password: hashedPassword,
    });

    return newUser
  }

  async login({ username, password }): Promise<string> {
    const user = await this.userRepository.findOne({
      username,
    });
    if (!user) {
      throw new BadRequestException('Usuário ou senha inválido');
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new BadRequestException('Usuário ou senha inválido');
    }

    delete user.password

    const access_token = jwt.sign({ ...user },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '7d',
      },
    );

    return access_token;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.findMany({})
    const response = users.map(user => {
      delete user.password;
      return user
    });
    return response
  }
}
