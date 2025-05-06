import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  getMessages() {
    return this.chatService.getAllMessages();
  }

  @Post()
  sendMessage(@Body() body: { content: string; senderId: number }) {
    return this.chatService.sendMessage(body.content, body.senderId);
  }
}
