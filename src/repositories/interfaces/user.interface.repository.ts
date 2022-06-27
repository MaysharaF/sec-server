import { User } from '../../database/models/user.entity';
import { IBaseRepository } from '../base/base.interface.repository';

export interface IUserRepository
  extends IBaseRepository<User> { }
