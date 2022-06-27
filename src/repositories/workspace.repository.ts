import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from '../database/models/workspace.entity';
import { BaseRepository } from './base/base.repository';
import { IWorkspaceRepository } from './interfaces/workspace.interface.repository';

@Injectable()
export class WorkspaceRepository
  extends BaseRepository<Workspace>
  implements IWorkspaceRepository {
  constructor(
    @InjectRepository(Workspace)
    private readonly ormRepository: Repository<Workspace>,
  ) {
    super(ormRepository);
  }
}
