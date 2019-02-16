import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsModule } from '../contacts/contacts.module';
import { InputModule } from '../input/input.module';
import { WrapperModule } from '../wrapper/wrapper.module';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule,

    ContactsModule,
    InputModule,
    WrapperModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
