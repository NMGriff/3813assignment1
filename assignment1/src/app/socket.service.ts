import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  
  constructor() { }
  //Sockets
  initSocket() {
    this.socket = io('localhost:3000/ws')
   }
  receive(next) { 
    this.socket.on('message', message => next(message));
  }
  send() { }
}
