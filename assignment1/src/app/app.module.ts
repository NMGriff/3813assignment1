import { NgModule } from '@angular/core'
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
//import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';



@NgModule({
    declarations: [
      //login, 
      //Parsecred,
      AppComponent,
      //LoginComponent
    ],
    imports: [
      //FormsModule,
      BrowserModule,
      AppRoutingModule
      //NgbModule
      

    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }