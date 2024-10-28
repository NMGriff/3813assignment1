import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { IndexComponent } from './index/index.component';


export const routes: Routes = [
    { path: 'chat', component: ChatComponent,title:'Chat' },
    { path: '', component: IndexComponent,title:'Index' },
   
];
