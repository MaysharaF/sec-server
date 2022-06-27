import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { IUserService } from './user.service.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject('userService')
    private readonly userService: IUserService,
  ) {}

  @Post('/create')
  async create(@Body() payload) {
    const response = await this.userService.create(payload);

    delete response.password;

    return { message: 'Usuário criado com sucesso', content: response };
  }

  @Post('/login')
  async login(@Body() payload): Promise<{ access_token: string }> {
    const response = await this.userService.login(payload);
    return { access_token: response };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/list')
  async findAll() {
    const response = await this.userService.findAll();
    return { message: 'Usuário obtidos com sucesso', content: response };
  }
}
