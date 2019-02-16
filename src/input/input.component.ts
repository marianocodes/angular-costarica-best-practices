import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {

  @Output()
  public add = new EventEmitter();

  public contact: string;

  constructor() { }

  public addNewContact(event, name: string) {
    if (event.keyCode === 13) {
      this.add.emit(name);
      this.contact = '';
    }
  }

}
