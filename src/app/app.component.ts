import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts/contacts.model';
import { ContactsService } from '../contacts/contacts.service';

@Component({
  selector: 'app-ngcr',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  public contacts: Contact[];

  constructor(public contactService: ContactsService) { }

  public ngOnInit() {
    this.contacts = this.contactService.getContacts(500);
  }

  public addNewContact(name: string) {
    this.contacts = [{ id: 101, name, randomNumber: Math.floor(Math.random() * Math.floor(10)) }, ...this.contacts];
  }


}
