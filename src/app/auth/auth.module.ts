import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt.guard';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  providers: [JwtStrategy, JwtAuthGuard],
})
export class AuthModule {}
