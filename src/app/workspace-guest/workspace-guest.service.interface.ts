import { WorkspaceGuests } from "../../database/models/workspaceGuests.entity"

export interface IWorkspaceGuestService {
  create(payload): Promise<WorkspaceGuests>
}