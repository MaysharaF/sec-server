import { File } from "../../database/models/file.entity"

export interface IFileService {
  create(payload): Promise<File>
  findById(id: number): Promise<File>
  findAll(): Promise<File[]>
  findByWorkspace(workspace_id: number): Promise<File[]>
  removeById(id: number): Promise<void>
}