import { WorkspaceGuests } from '../../database/models/workspaceGuests.entity';
import { IBaseRepository } from '../base/base.interface.repository';

export interface IWorkspaceGuestsRepository
  extends IBaseRepository<WorkspaceGuests> { }
