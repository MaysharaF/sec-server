import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../database/models/user.entity';
import { BaseRepository } from './base/base.repository';
import { IUserRepository } from './interfaces/user.interface.repository';

@Injectable()
export class UserRepository
  extends BaseRepository<User>
  implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly ormRepository: Repository<User>,
  ) {
    super(ormRepository);
  }
}
