import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkspaceGuestService } from './workspace-guest.service';
import { WorkspaceGuestController } from './workspace-guest.controller';
import { WorkspaceGuestsRepository } from 'src/repositories/workspaceGuest.repository';

import { WorkspaceGuests } from '../../database/models/workspaceGuests.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkspaceGuests])],
  providers: [
    {
      provide: 'workspaceGuestService',
      useClass: WorkspaceGuestService,
    },
    {
      provide: 'workspaceGuestsRepository',
      useClass: WorkspaceGuestsRepository,
    }],
  controllers: [WorkspaceGuestController]
})
export class WorkspaceGuestModule { }
