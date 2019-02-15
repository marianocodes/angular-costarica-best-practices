import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';
import { SessionService } from '../app/session.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutUsComponent],
  exports: [AboutUsComponent],
  providers: [SessionService]
})
export class AboutUsModule { }
