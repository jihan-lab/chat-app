import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllMessages() {
    return this.prisma.user.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async sendMessage(content: string, senderId: string) {
    return this.prisma.message.create({
      data: {
        content,
        senderId,
      },
    });
  }

  // create(username: string) {
  //   return this.prisma.user.create({ data: { username } });
  // }

  // findAll() {
  //   return this.prisma.user.findMany();
  // }
}

// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Injectable()
// export class UserService {
//   create(createUserDto: CreateUserDto) {
//     return 'This action adds a new user';
//   }

//   findAll() {
//     return `This action returns all user`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }
