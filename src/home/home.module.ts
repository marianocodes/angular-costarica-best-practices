import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SessionService } from '../session.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [
    SessionService
  ]
})
export class HomeModule { }
