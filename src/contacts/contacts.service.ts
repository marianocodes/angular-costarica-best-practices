import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { ContactsModule } from './contacts.module';

@Injectable({
  providedIn: ContactsModule
})
export class ContactsService {

  constructor() { }

  public getList() {
    return of([
      { name: 'Carlos' },
      { name: 'Juan' }
    ]);
  }

}
