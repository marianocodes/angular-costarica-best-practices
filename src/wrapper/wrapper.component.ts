import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contacts/contacts.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
})
export class WrapperComponent {

  @Input()
  public data: Contact[];

  @Output()
  public add = new EventEmitter();

  constructor() { }

  public addNewContact(name: string) {
    this.add.emit(name);
  }

}
































/// changeDetection: ChangeDetectionStrategy.OnPush
