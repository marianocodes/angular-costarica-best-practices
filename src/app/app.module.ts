import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from '../home/home.module';
import { AboutUsModule } from '../about-us/about-us.module';


@NgModule({
  imports:      [
    BrowserModule,
    RouterModule,
    AppRoutingModule,

    HomeModule,
    AboutUsModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
