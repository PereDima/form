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
  hide = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      nickName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&_*-]).{8,}$'
        ),
      ]),
    });
  }

  get firstName() {
    return this.myForm.get('firstName') as FormArray;
  }

  get lastName() {
    return this.myForm.get('lastName') as FormArray;
  }

  get nickName() {
    return this.myForm.get('nickName') as FormArray;
  }

  get email() {
    return this.myForm.get('email') as FormArray;
  }

  get password() {
    return this.myForm.get('password') as FormArray;
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = { ...this.myForm.value };
      console.log(formData);
      this.myForm.reset();
    }
  }
}
