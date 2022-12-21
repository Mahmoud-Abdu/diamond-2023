import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false
  hide = true;
  logInForm = new FormGroup({
    Email: new FormControl('' ,[Validators.required] ),
    Password: new FormControl('',[Validators.required]),
  });

  onSubmit(){
    console.log(this.logInForm.value);

  }


  constructor() { }



  ngOnInit(): void {

  }
}
