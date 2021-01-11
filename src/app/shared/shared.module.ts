import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [LayoutComponent, NavBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
