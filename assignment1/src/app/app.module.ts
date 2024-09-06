import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
    declarations: [
      login, 
      Parsecred,
    ],
    imports: [
      FormsModule,
      BrowserModule,
      NgbModule,
      AppRoutingModule

    ],
    providers: [],
    bootstrap: [LoginComponent]
  })
  export class AppModule { }