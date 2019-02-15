import { Injectable } from '@angular/core';

import { Contact } from './contacts.model';

import * as mock from '../assets/mock-data.json';

let index = 5;

const contacts: Contact[] = [ ...mock['default'].data ];

@Injectable()
export class ContactsService {

  constructor() { }

  public getContacts(max?: number) {
    index++;
    /**
     * Ignore this line, this is just run a deepcopy and avoid references
     * In a real scenario, this is not needed
     */
    return JSON.parse(JSON.stringify(contacts.slice(0, max || index)));
  }

}
