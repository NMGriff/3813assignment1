import { inject, Injectable } from '@angular/core';
import { Message } from './message';
import { User } from './user';
import { SocketService } from './socket.service';
//Sockets
//import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //Sockets
  socketService: SocketService = inject (SocketService);

  //commented out for hard coded data during server side implementation
  protected messageList: Message[] = [
    
    // {
    //   id: 1,
    //   message: "test123",
    //   user: {
    //     id: 1,
    //     username: "bob",
    //     email: "",
    //     groups: []
    //   }
    // },
    // {
    //   id: 2,
    //   message: "test456",
    //   user: {
    //     id: 2,
    //     username: "sam",
    //     email: "",
    //     groups: []
    //   }
    // }
  ];

  constructor() { 
    //Sockets
    //this.socket = io('localhost:3000/ws');
    //this.socket.on('new-messages',m =>{alert(m);});
    this.socketService.initSocket();
    this.socketService.receive((m) => {
     const user : User = {
        id : 1,
        username : m.username,
        email : '',
        groups : []

      }
      this.messageList.push({

        id: m.id,
        message: m.message,
        user: user,
  
      })
    });


  }

  getAllMessages(): Message[] {
    return this.messageList;
  }

  getMessageById(id: Number): Message | undefined {
    return this.messageList.find(message => message.id === id);
  }

  sendMessage(message: string, user: User) {
    //Get last item in message list
    const lastMessage = this.messageList[this.messageList.length -1];
    //Get id of last item
    const lastMessageId = lastMessage?.id;
    //Get next id
    const nextMessageId = 1 + (lastMessageId ?? 0);



    this.messageList.push({

      id: nextMessageId,
      message: message,
      user: user,

    })
  }
}
