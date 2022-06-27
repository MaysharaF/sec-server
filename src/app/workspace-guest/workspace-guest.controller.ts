import { Body, Controller, Inject, Post } from '@nestjs/common';

import { IWorkspaceGuestService } from './workspace-guest.service.interface';

@Controller('workspace-guest')
export class WorkspaceGuestController {
  constructor(
    @Inject('workspaceGuestService')
    private readonly workspaceGuestService: IWorkspaceGuestService,
  ) { }


  @Post('/create')
  async create(
    @Body() payload,
  ) {
    const response = await this.workspaceGuestService.create(payload);

    return { message: 'Vinculo de usuário ao workspace criado com sucesso', content: response };
  }
}
