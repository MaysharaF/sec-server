import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { In } from 'typeorm';
import { IWorkspaceRepository } from '../../repositories/interfaces/workspace.interface.repository';
import { IWorkspaceService } from './workspace.service.interface';

import { User } from '../../database/models/user.entity';
import { Workspace } from '../../database/models/workspace.entity';
import { WorkspaceGuests } from '../../database/models/workspaceGuests.entity';
import { IWorkspaceGuestsRepository } from '../../repositories/interfaces/workspaceGuest.interface.repository';
import { IUserRepository } from '../../repositories/interfaces/user.interface.repository';

@Injectable()
export class WorkspaceService implements IWorkspaceService {
  constructor(
    @Inject('workspaceRepository')
    private readonly workspaceRepository: IWorkspaceRepository,
    @Inject('workspaceGuestsRepository')
    private readonly workspaceGuestsRepository: IWorkspaceGuestsRepository,
    @Inject('userRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async create(payload: any): Promise<Workspace> {
    const registredWorkspace = await this.workspaceRepository.findOne({
      name: payload.name,
      owner_id: payload.owner_id,
    });

    if (registredWorkspace) {
      throw new BadRequestException('Workspace com mesmo nome já criado');
    }

    const newWorkspace = await this.workspaceRepository.insert({
      ...payload,
    });

    return newWorkspace;
  }

  async findAllByUserId(
    user_id: number,
  ): Promise<{ workspaces: Workspace[]; workspacesGuest: WorkspaceGuests[] }> {
    const workspaces = await this.workspaceRepository.findMany({
      owner_id: user_id,
    });

    const workspacesGuest = await this.workspaceGuestsRepository.findMany({
      user_id: user_id,
    });

    return {
      workspaces,
      workspacesGuest,
    };
  }

  async findGuests(id: number, user_id: number): Promise<User[]> {
    const workspaces = await this.workspaceRepository.findOne({
      id,
      owner_id: user_id,
    });

    if (!workspaces) {
      return [];
    }

    const workspacesGuest = await this.workspaceGuestsRepository.findMany({
      workspace_id: workspaces.id,
    });

    const workspacesGuestUserIds = workspacesGuest.map(
      (workspaceGuest) => workspaceGuest.user_id,
    );

    const users = await this.userRepository.findMany({
      id: In(workspacesGuestUserIds),
    });

    return users;
  }
}
