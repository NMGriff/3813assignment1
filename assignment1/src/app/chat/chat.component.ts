import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MessageHistoryComponent } from '../message-history/message-history.component';
import { MessageInputComponent } from '../message-input/message-input.component';
import { Message } from '../message';
import { MessageComponent } from '../message/message.component';
import { MessageService } from '../message.service';
//Sockets import
import * as io from 'socket.io-client';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    MessageHistoryComponent,
    MessageInputComponent,
    MessageComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
//Sockets and chat interface
export class ChatComponent {
  messages:Message[] = [];
  messageService: MessageService = inject (MessageService);

  constructor() {
    this.messages = this.messageService.getAllMessages();
  }

}
