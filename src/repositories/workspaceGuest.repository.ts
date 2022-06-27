import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkspaceGuests } from '../database/models/workspaceGuests.entity';
import { BaseRepository } from './base/base.repository';
import { IWorkspaceGuestsRepository } from './interfaces/workspaceGuest.interface.repository';

@Injectable()
export class WorkspaceGuestsRepository
  extends BaseRepository<WorkspaceGuests>
  implements IWorkspaceGuestsRepository {
  constructor(
    @InjectRepository(WorkspaceGuests)
    private readonly ormRepository: Repository<WorkspaceGuests>,
  ) {
    super(ormRepository);
  }
}
