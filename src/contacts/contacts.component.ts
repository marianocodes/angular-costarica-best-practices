import { Component, OnInit } from '@angular/core';

import { Contact } from './contacts.model';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public list: Contact[];

  constructor(public contactService: ContactsService) { }

  public ngOnInit() {
    this.addNewContact();
  }

  public addNewContact() {
    this.list = this.contactService.getContacts(500);
  }

}
