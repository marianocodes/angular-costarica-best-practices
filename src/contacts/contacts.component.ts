import { Component, OnInit } from '@angular/core';

import { ContactsService } from './contacts.service';
import { Observable } from 'rxjs';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public list$: Observable<Record<string, any>>;

  constructor(public contactsService: ContactsService, public sessionService: SessionService) {
    this.list$ = contactsService.getList();
  }

  public ngOnInit() { }

}
