import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}

  create(content: string, userId: number) {
    return this.prisma.message.create({
      data: {
        content,
        sender: { connect: { id: userId } },
      },
      include: { sender: true },
    });
  }

  findAll() {
    return this.prisma.message.findMany({
      include: { sender: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}

// import { Injectable } from '@nestjs/common';
// import { CreateMessageDto } from './dto/create-message.dto';
// import { UpdateMessageDto } from './dto/update-message.dto';

// @Injectable()
// export class MessageService {
//   create(createMessageDto: CreateMessageDto) {
//     return 'This action adds a new message';
//   }

//   findAll() {
//     return `This action returns all message`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} message`;
//   }

//   update(id: number, updateMessageDto: UpdateMessageDto) {
//     return `This action updates a #${id} message`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} message`;
//   }
// }
