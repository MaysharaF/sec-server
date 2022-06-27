import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FileService } from './file.service';
import { FileController } from './file.controller';
import { FileRepository } from '../../repositories/file.repository';

import { File } from '../../database/models/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  providers: [
    {
      provide: 'fileService',
      useClass: FileService,
    },
    {
      provide: 'fileRepository',
      useClass: FileRepository,
    }
  ],
  controllers: [FileController]
})
export class FileModule { }
