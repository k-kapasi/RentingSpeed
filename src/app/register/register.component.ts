import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ValidationModule} from '../validation/validation.module'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl('Gujarat'),
    postalCode: new FormControl(''),
    mobileNumber: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
         state:['Gujarat',[Validators.required]],
         postalCode:['',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6)
        ]],
        mobileNumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        dob:['',[Validators.required]],
        gender:['',[Validators.required]],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [ValidationModule.match('password', 'confirmPassword')]
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}