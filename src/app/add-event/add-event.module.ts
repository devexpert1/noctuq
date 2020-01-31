import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddEventPage } from './add-event.page';
import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';
const routes: Routes = [
  {
    path: '',
    component: AddEventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [AddEventPage]
})
export class AddEventPageModule {}
