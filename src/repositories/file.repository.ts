import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from '../database/models/file.entity';
import { BaseRepository } from './base/base.repository';
import { IFileRepository } from './interfaces/file.interface.repository';

@Injectable()
export class FileRepository
  extends BaseRepository<File>
  implements IFileRepository {
  constructor(
    @InjectRepository(File)
    private readonly ormRepository: Repository<File>,
  ) {
    super(ormRepository);
  }
}
