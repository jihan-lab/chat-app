import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [AuthService, PrismaService],
  controllers: [AuthController],
  imports: [
    ConfigModule.forRoot(), // ⬅️ Pastikan ini ada
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
