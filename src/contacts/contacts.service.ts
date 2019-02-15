import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class ContactsService {

  constructor() { }

  public getList() {
    return of([
      { name: 'Carlos' },
      { name: 'Juan' }
    ]);
  }

}
