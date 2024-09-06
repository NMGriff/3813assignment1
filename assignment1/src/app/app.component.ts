import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment1';

  constructor(private modalService: NgbModal) {
  }
}