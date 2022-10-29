import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashbaordModule } from '../core/dashbaord/dashbaord.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DashbaordModule
  ]
})
export class PagesModule { }
