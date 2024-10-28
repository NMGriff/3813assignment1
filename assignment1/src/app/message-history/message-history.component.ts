import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { Message } from '../message';

//Message history and increment
@Component({
  selector: 'app-message-history',
  standalone: true,
  imports: [
    CommonModule,
    MessageComponent

  ],
  templateUrl: './message-history.component.html',
  styleUrl: './message-history.component.css'
})
export class MessageHistoryComponent {
  @Input() messages!:Message[];
 
}
