import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { IFileService } from './file.service.interface';

@Controller('file')
export class FileController {
  constructor(
    @Inject('fileService')
    private readonly fileService: IFileService,
  ) { }

  @Post('/create')
  async create(
    @Body() payload,
  ) {
    const response = await this.fileService.create(payload);

    return { message: 'Arquivo criado com sucesso', content: response };
  }

  @Get('/list')
  async findAll() {
    const response = await this.fileService.findAll();

    return { message: 'Arquivos encontrado com sucesso', content: response };
  }

  @Get('/workspace/:id/list')
  async findByWorkspace(@Param('id') id: number) {
    const response = await this.fileService.findByWorkspace(id);

    return { message: 'Arquivos encontrado com sucesso', content: response };
  }

  @Get('/find/:id')
  async findById(@Param('id') id: number) {
    const response = await this.fileService.findById(id);

    return { message: 'Arquivo encontrado com sucesso', content: response };
  }

  @Delete('/delete/:id')
  async deleteById(@Param('id') id: number) {
    await this.fileService.removeById(id);

    return { message: 'Arquivo removido com sucesso' };
  }

}
