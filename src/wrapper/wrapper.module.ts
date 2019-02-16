import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperComponent } from './wrapper.component';
import { InputModule } from '../input/input.module';
import { ContactsModule } from '../contacts/contacts.module';

@NgModule({
  imports: [
    CommonModule,
    InputModule,
    ContactsModule
  ],
  declarations: [WrapperComponent],
  exports: [WrapperComponent]
})
export class WrapperModule { }
