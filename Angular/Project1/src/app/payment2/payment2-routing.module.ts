import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Payment2Component } from './payment2.component';

const routes: Routes = [{ path: '', component: Payment2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Payment2RoutingModule { }
