import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  //   Register
  async register(data: { email: string; password: string; username: string }) {
    const hashPassword = await bcrypt.hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: data?.email,
        password: hashPassword,
        username: data?.username,
      },
    });
    const token = await this.signToken(user?.id, user?.email);

    return { user, token };
  }

  //   Login
  async login(data: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({
      where: { email: data?.email },
    });

    if (!user) {
      throw new UnauthorizedException('Email tidak ditemukan');
    }

    const isMatch = await bcrypt.compare(data?.password, user?.password);

    if (!isMatch) {
      throw new UnauthorizedException('Password salah');
    }
    const token = await this.signToken(user?.id, user?.email);

    return { user, token };
  }

  // Generate JWT
  async signToken(userId: string, email: string): Promise<string> {
    const payload = { sub: userId, email };
    return this.jwt.signAsync(payload);
  }
}
