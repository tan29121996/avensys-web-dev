import { Component } from '@angular/core';

@Component({
  selector: 'app-root1234',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';

  msg = true;

  print1 = "Hello"

  contacts = [
    {
      'fn': 'abc',
      'ln': 'dance center',
      'ID': 1234
    },
    {
      'fn': 'def',
      'ln': 'book center',
      'ID': 5678
    },
    {
      'fn': 'ghi',
      'ln': 'toy center',
      'ID': 9101
    },
    {
      'fn': 'jkl',
      'ln': 'car center',
      'ID': 4321
    }
  ]
}
