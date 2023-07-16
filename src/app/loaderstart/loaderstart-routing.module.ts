import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaderstartPage } from './loaderstart.page';

const routes: Routes = [
  {
    path: '',
    component: LoaderstartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaderstartPageRoutingModule {}
