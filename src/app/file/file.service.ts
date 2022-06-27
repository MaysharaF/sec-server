import { Inject, Injectable } from '@nestjs/common';
import { IFileService } from './file.service.interface';
import { IFileRepository } from '../../repositories/interfaces/file.interface.repository';

import { File } from '../../database/models/file.entity';

@Injectable()
export class FileService implements IFileService {
  constructor(
    @Inject('fileRepository')
    private readonly fileRepository: IFileRepository,
  ) { }

  async create(payload): Promise<File> {
    return await this.fileRepository.insert({
      file: payload.file,
      type: payload.type,
      name: payload.name,
      workspace_id: payload.workspace_id,
    })
  }

  async findById(id: number): Promise<File> {
    return await this.fileRepository.findOne({ id })
  }

  async findByWorkspace(workspace_id: number): Promise<File[]> {
    return await this.fileRepository.findMany({ workspace_id })
  }

  async findAll(): Promise<File[]> {
    return await this.fileRepository.findMany({})
  }

  async removeById(id: number): Promise<void> {
    await this.fileRepository.delete(id)
  }
}
