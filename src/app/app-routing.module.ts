import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loaderstart',
    pathMatch: 'full'
  },
  {
    path: 'feeding',
    loadChildren: () => import('./feeding/feeding.module').then( m => m.FeedingPageModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./temperature/temperature.module').then( m => m.TemperaturePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'loaderlogin',
    loadChildren: () => import('./loaderlogin/loaderlogin.module').then( m => m.LoaderloginPageModule)
  },
  {
    path: 'loaderstart',
    loadChildren: () => import('./loaderstart/loaderstart.module').then( m => m.LoaderstartPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
