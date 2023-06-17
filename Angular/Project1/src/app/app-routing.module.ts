import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from 'src/comp1/comp1.component';
import { Comp2Component } from 'src/comp2/comp2.component';
import { Comp3Component } from 'src/comp3/comp3.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Pg404Component } from './pg404/pg404.component';
import { firstguardGuard } from './firstguard.guard';
import { secondguardGuard } from './secondguard.guard';
import { thirdguardGuard } from './thirdguard.guard';
import { paymentguardGuard } from './paymentguard.guard';
import { deactivateGuard } from './deactivate.guard';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

const routes: Routes = [
  {
    path: "comp1",
    component: Comp1Component,
    canActivate: [firstguardGuard, secondguardGuard]
    // outlet: 'channel1' // (channel1:comp1)
  },
  {
    path: "comp2",
    component: Comp2Component,
    // outlet: "channel2" // (channel2:comp2)
  },
  {
    path: "comp3",
    component: Comp3Component
  },
  {
    path: "product",
    component: ProductComponent,
    canDeactivate: [deactivateGuard]
  },
  {
    path: "form1",
    component: Form1Component
  },
  {
    path: "form2",
    component: Form2Component
  },

  // {
  //   path: "product",
  //   canActivate: [firstguardGuard],
  //   children: [
  //     {
  //       path: "",
  //       component: ProductComponent
  //     },
  //     {
  //       path: "",
  //       canActivateChild: [thirdguardGuard],
  //       children: [
  //         {path: "comp1", component: Comp1Component},
  //         {path: "comp2", component: Comp2Component},
  //         {path: "comp3", component: Comp3Component}
  //       ]
  //     }
  //   ]
  // },

  // {
  //   path: "product/:productValue/discount/:discount",
  //   component: ProductComponent
  // },
  // {
  //   path: "automobile",
  //   redirectTo: "cars & bikes"
  // },
  // {
  //   path: "purchase comp1",
  //   redirectTo: "cars & bikes"
  // },
  // {
  //   path: "cars & bikes",
  //   component: AppComponent
  // },
  // {
  //   path: "cars & bikes",
  //   children: [
  //     {
  //       path: "comp1",
  //       component: Comp1Component,
  //     },
  //     {
  //       path: "comp2",
  //       component: Comp2Component,
  //     },
  //     {
  //       path: "comp3",
  //       component: Comp3Component,
  //     },
  //   ]
  // },
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
  { path: 'payment2', 
  canLoad: [paymentguardGuard],
  loadChildren: () => import('./payment2/payment2.module').then(m => m.Payment2Module) },
  {
    path: "**",
    component: Pg404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
