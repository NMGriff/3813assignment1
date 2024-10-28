import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'
import { MessageService } from '../message.service';
import { Message } from '../message';
import { User } from '../user';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.css'
})
export class MessageInputComponent {
  messageService = inject(MessageService);
  message : Message | undefined;
  user : User;
  messageInputForm = new FormGroup({
    messageInput: new FormControl('')

  });

  constructor() {
    this.message = undefined;
    this.user = {
      id : 1,
      username : "user",
      email : "",
      groups : []

    }
  }
  //message submission and user
  submitMessageInput() {
    this.messageService.sendMessage(this.messageInputForm.value.messageInput ?? '', this.user);
  }
}
