import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderloginPageRoutingModule } from './loaderlogin-routing.module';

import { LoaderloginPage } from './loaderlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderloginPageRoutingModule
  ],
  declarations: [LoaderloginPage]
})
export class LoaderloginPageModule {}
