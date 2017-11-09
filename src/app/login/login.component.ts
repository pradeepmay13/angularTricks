import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service'
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  responseData: any;
  employees: any;
  userDetails: any;
  appcomponentValue: string;
  credentials = {
    'userName':'',
    'password':''
  }
  constructor (private router: Router, private fb: FormBuilder, private loginService: LoginService) {
    
  }

  ngOnInit() {
    this.userForm	=	this.fb.group({
      username	:	['', Validators.required],
      password	:	['', Validators.required]
    });
  }
  test() {
    this.appcomponentValue = 'Test Data';
    this.loginService.login(this.userForm.value)
    .subscribe(
      response => {
        this.responseData = response;
        if (response.execution === '1' ) {
          localStorage.setItem('userData', JSON.stringify(this.responseData));
          this.loginService.userDetail();
          //this.loginService.chkLogin();
          this.router.navigate(['./home']);
        } else {
        }
      }
    )
  }
}
