import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  audi = ''
  bmw = ''
  ford =''

  constructor(private active: ActivatedRoute) {
    this.active.queryParams.subscribe((params) => {
      this.audi = params['audi']
      this.bmw = params['bmw']
      this.ford = params['ford']
    })
  }


  superpower = "Govern Man"

  r = "red"
  g = "green"

  sentence = "This is a sentence"

  h = "head"

  class1 = "c2 c4"
  class2 = "c1 c3"

  changeClass = false

  val = "2"

  hello() {
    console.log("Hello")
  }

  a(x:number, y:number, z:string) {
    console.log(x + y + z)
  }

  lower_case = "THIS USED TO BE UPPERCASE"

  upper_case = "this used to be lowercase"

  date_exm = Date.now()

  obj={
    "one":"ships",
    "two":"trains",
    "three":"plans"
  }

  num_val = 100
  num_per = 0.99
}
