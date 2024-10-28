import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
//import { CommonModule } from '@angular/common';
//import { LoginComponent } from './login/login.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //RouterOutlet,
    //ChatComponent,
    //CommonModule,
    RouterModule,
    ChatComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment Stage 2';

  
}
