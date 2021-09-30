import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  ngOnInit(): void {}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.myForm.value);
  }
}
