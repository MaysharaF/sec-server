import { File } from '../../database/models/file.entity';
import { IBaseRepository } from '../base/base.interface.repository';

export interface IFileRepository
  extends IBaseRepository<File> { }
