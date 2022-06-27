import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkspaceService } from './workspace.service';
import { WorkspaceController } from './workspace.controller';
import { WorkspaceRepository } from '../../repositories/workspace.repository';
import { WorkspaceGuestsRepository } from '../../repositories/workspaceGuest.repository';
import { UserRepository } from '../../repositories/user.repository';

import { Workspace } from '../../database/models/workspace.entity';
import { WorkspaceGuests } from '../../database/models/workspaceGuests.entity';
import { User } from '../../database/models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workspace, WorkspaceGuests, User])],
  providers: [
    {
      provide: 'workspaceService',
      useClass: WorkspaceService,
    },
    {
      provide: 'workspaceRepository',
      useClass: WorkspaceRepository,
    },
    {
      provide: 'workspaceGuestsRepository',
      useClass: WorkspaceGuestsRepository,
    },
    {
      provide: 'userRepository',
      useClass: UserRepository,
    }
  ],
  controllers: [WorkspaceController]
})
export class WorkspaceModule { }
