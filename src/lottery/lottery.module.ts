import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotteryComponent } from './lottery.component';

import { NumberModule } from './number/number.module'

@NgModule({
  imports: [
    CommonModule    
  ],
  declarations: [ LotteryComponent ],
  exports: [ NumberModule, LotteryComponent ]
})
export class LotteryModule { }