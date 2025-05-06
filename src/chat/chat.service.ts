import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async getAllMessages() {
    return this.prisma.message.findMany({
      include: { sender: true },
      orderBy: { createdAt: 'asc' },
    });
  }

  async sendMessage(content: string, senderId: number) {
    return this.prisma.message.create({
      data: {
        content,
        senderId,
      },
    });
  }
}
