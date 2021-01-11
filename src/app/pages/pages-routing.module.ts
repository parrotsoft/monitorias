import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from '../shared/layout/layout.component';

const routes: Routes = [
  { path: 'pages', component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
