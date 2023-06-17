import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  firstname = ""
  checkbox = false
  option = ""
  description = ""

  func1(value: NgForm) {
    console.log(value.value)
  }
  resetForm(value: NgForm) {
    value.reset()
  }

  setValues(value: NgForm) {
    let details = {
      firstname: "name",
      checkbox: true,
      option: "1",
      description: "write something"
    }
    value.setValue(details)
  }
}
