import { Workspace } from '../../database/models/workspace.entity';
import { IBaseRepository } from '../base/base.interface.repository';

export interface IWorkspaceRepository
  extends IBaseRepository<Workspace> { }
