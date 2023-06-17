import { Component , OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  addForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.addForm = new FormGroup({
    //   'one': new FormControl('', Validators.required),
    //   'two': new FormControl('', Validators.minLength(10)),
    //   'desc': new FormControl('writing stuff'),
    // })

    this.addForm = this.fb.group({
      'one': new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      'two': new FormControl(''),
      'desc': new FormControl('', Validators.minLength(5)),

      // 'users': new FormArray([
      //   new FormControl('first one'),
      //   new FormControl('second one'),
      //   new FormControl('third one'),
      //   new FormControl('fourth one'),
      //   new FormControl('fifth one'),
      // ])

      'users': new FormArray([
        this.fb.group({
          'name': new FormControl(''),
          'marks': new FormControl(''),
          'branch': new FormControl('')
        })
      ])
    })

    let obj = {
      'two': 'Reactive'
    }
    this.addForm.patchValue(obj)
  }

  addElement() {
    let userArr = this.addForm.get('users') as FormArray;
    let newUser = this.fb.group({
      'name': '',
      'marks': '',
      'branch': ''
    });
    userArr.push(newUser)
  }

  removeElement(i) {
    let userArr = this.addForm.get('users') as FormArray;
    userArr.removeAt(i)
  }

  get users():FormArray {
    return this.addForm.get('users') as FormArray
  }

  assign(i) {
    let userArr = this.addForm.get('users') as FormArray;
    if (userArr.value[i].marks > 60) {
      userArr.value[i].branch = 'CSE';
    } else {
      userArr.value[i].branch = 'Not Qualified';
    }
    userArr.setValue(userArr.value);
  }

  addval() {
    console.log(this.addForm.value)
    this.addForm.valueChanges.subscribe(data => {
      console.log(data)
    })
    if (this.addForm.pristine) {

    } 

    if (this.addForm.touched) {

    } 

    console.log("Valid: " + this.addForm.valid)
    console.log("Invalid: " + this.addForm.invalid)
    console.log("Pristine: " + this.addForm.pristine)
    console.log("Dirty: " + this.addForm.dirty)
    console.log("Touched: " + this.addForm.touched)
    console.log("Untouched: " + this.addForm.untouched)
  }

  resetForm() {
    this.addForm.reset()
  }
}
