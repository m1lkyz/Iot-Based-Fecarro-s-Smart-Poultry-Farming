import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaderloginPage } from './loaderlogin.page';

const routes: Routes = [
  {
    path: '',
    component: LoaderloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaderloginPageRoutingModule {}
