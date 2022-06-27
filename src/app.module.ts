import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';
import { WorkspaceModule } from './app/workspace/workspace.module';
import { FileModule } from './app/file/file.module';
import { WorkspaceGuestModule } from './app/workspace-guest/workspace-guest.module';
import ormOptions from './config/orm';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot(ormOptions),
    AuthModule,
    UserModule,
    WorkspaceModule,
    FileModule,
    WorkspaceGuestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
