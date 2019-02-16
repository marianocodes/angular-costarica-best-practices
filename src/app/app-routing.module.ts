import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from '../about-us/about-us.component';
import { HomeComponent } from '../home/home.component';
import { ContactsComponent } from '../contacts/contacts.component';

const routes: Routes = [
  {
    path: 'contacts',
    loadChildren: '../contacts/contacts.module#ContactsModule',
    // component: ContactsComponent
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
