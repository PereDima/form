import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup | any;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      nickName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      password: ['', [Validators.required],],
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.myForm.value);
  }
}
