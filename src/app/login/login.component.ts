import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   submitted: boolean = false;
  public loginForm! : FormGroup;
  public router: any;
  constructor(private fb: FormBuilder) {}
username:string="";
password:string = "";
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  login()  {
 this.submitted= true;
  console.log('login success');
}
}