import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderstartPageRoutingModule } from './loaderstart-routing.module';

import { LoaderstartPage } from './loaderstart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderstartPageRoutingModule
  ],
  declarations: [LoaderstartPage]
})
export class LoaderstartPageModule {}
