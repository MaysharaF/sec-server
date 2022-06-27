import { WorkspaceGuests } from '../../database/models/workspaceGuests.entity';
import { Workspace } from '../../database/models/workspace.entity';
import { User } from '../../database/models/user.entity';

export interface IWorkspaceService {
  create(payload): Promise<Workspace>;
  findAllByUserId(
    user_id: number,
  ): Promise<{ workspaces: Workspace[]; workspacesGuest: WorkspaceGuests[] }>;
  findGuests(id: number, user_id: number): Promise<User[]>;
}
