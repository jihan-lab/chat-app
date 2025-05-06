import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { PrismaService } from 'src/prisma.service';
// import { MessageController } from './message.controller';
import { MessageController } from './message.controller';

@Module({
  // controllers: [MessageController],
  exports: [PrismaService],
  providers: [MessageService, PrismaService],
  controllers: [MessageController],
})
export class MessageModule {}
