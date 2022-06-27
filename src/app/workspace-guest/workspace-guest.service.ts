import { Inject, Injectable } from '@nestjs/common';
import { IWorkspaceGuestsRepository } from '../../repositories/interfaces/workspaceGuest.interface.repository';

import { WorkspaceGuests } from '../../database/models/workspaceGuests.entity';

@Injectable()
export class WorkspaceGuestService {
  constructor(
    @Inject('workspaceGuestsRepository')
    private readonly workspaceGuestsRepository: IWorkspaceGuestsRepository,
  ) { }

  async create(payload): Promise<WorkspaceGuests> {
    return await this.workspaceGuestsRepository.insert({
      user_id: payload.user_id,
      workspace_id: payload.workspace_id,
    })
  }
}
