import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Contact } from './contacts.model';

export const calculateFactorial = (value) => {
  let result = 1;

  for (let index =1 ; index <= value; index++) {
    result = result * index;
  }

  return result;
};

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {

  @Input()
  public list: Contact[];

  @Output()
  public add = new EventEmitter();

  public txtinput: string;

  constructor() { }

  public addNewContact(event, name: string) {
    if (event.keyCode === 13) {
      this.add.emit(name);
      this.txtinput = '';
    }
  }

  public calcFac(num: number) {
    console.log('Func: Calculating factorial');
    return calculateFactorial(num);
  }

 }
























// public print() {
//   console.log('Hi!');
// }
