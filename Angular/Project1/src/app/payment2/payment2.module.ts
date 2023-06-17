import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Payment2RoutingModule } from './payment2-routing.module';
import { Payment2Component } from './payment2.component';


@NgModule({
  declarations: [
    Payment2Component
  ],
  imports: [
    CommonModule,
    Payment2RoutingModule
  ]
})
export class Payment2Module { }
