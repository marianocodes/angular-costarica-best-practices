import { Component, OnInit } from '@angular/core';
import { SessionService } from '../app/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public sessionService: SessionService) { }

  public saveContact(term: string): void {
    this.sessionService.name = term;
  }

  public ngOnInit() { }

}
