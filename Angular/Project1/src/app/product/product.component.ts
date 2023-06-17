import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productValue = 0
  discount = 0

  isAllowed = true

  constructor(private activate: ActivatedRoute) {
    this.activate.params.subscribe((params) => {
      let valone = params

      this.productValue = valone['productValue']
      this.discount = valone['discount']
    })
  }
}
