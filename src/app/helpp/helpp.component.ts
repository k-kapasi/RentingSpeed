import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-helpp',
  templateUrl: './helpp.component.html',
  styleUrls: ['./helpp.component.css']
})
export class HelppComponent implements OnInit {
  form:FormGroup = new FormGroup({
    name: new FormGroup(''),
    mobileNumber: new FormGroup(''),
    email: new FormGroup(''),
    message: new FormGroup(''),
  })
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name : ['', Validators.required],
      mobileNumber : ['', Validators.required],
      email : ['', Validators.required],
      message : ['', Validators.required],
    })
  }
  onSend(): void{
    alert("message sent");
    console.log(JSON.stringify(this.form.value))
  }

}
