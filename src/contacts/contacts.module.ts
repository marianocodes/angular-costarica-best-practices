import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './contacts.component';

import { ContactsService } from './contacts.service';
import { FactorialPipe } from './factorial.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ContactsComponent, FactorialPipe],
  exports: [ContactsComponent],
  providers: [
    ContactsService
  ]
})
export class ContactsModule { }
