import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutUsComponent],
  exports: [AboutUsComponent]
})
export class AboutUsModule { }
