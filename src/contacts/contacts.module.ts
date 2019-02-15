import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './contacts.component';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsService } from './contacts.service';
import { SessionService } from '../session.service';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsComponent],
  exports: [ContactsComponent],
  providers: [
    ContactsService,
    SessionService
  ]
})
export class ContactsModule { }
