import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { IWorkspaceService } from './workspace.service.interface';

@UseGuards(JwtAuthGuard)
@Controller('workspace')
export class WorkspaceController {
  constructor(
    @Inject('workspaceService')
    private readonly workspaceService: IWorkspaceService,
  ) {}

  @Post('/create')
  async create(@Request() req, @Body() payload) {
    const response = await this.workspaceService.create({
      name: payload.name,
      owner_id: req.user.id,
      files: [],
    });
    return { message: 'Workspace criado com sucesso', content: response };
  }

  @Get('/list')
  async findAllByUserId(@Request() req) {
    const response = await this.workspaceService.findAllByUserId(req.user.id);
    return { message: 'Workspace obtidos com sucesso', content: response };
  }

  @Get('/:id/guests')
  async findAllGuests(@Request() req, @Param('id') id: number) {
    const response = await this.workspaceService.findGuests(id, req.user.id);
    return {
      message: 'Convidados do workspace obtidos com sucesso',
      content: response,
    };
  }
}
