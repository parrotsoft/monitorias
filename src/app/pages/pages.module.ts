import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {HomeModule} from './home/home.module';
import {SharedModule} from '../shared/shared.module';
import {AcademyModule} from './academy/academy.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    SharedModule,
    AcademyModule
  ]
})
export class PagesModule { }
