import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { Comp3Component } from 'src/comp3/comp3.component';

const routes: Routes = [{ path: '', component: PaymentComponent },
{
  path: "comp3",
  component: Comp3Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
