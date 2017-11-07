import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service'
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginx',
  templateUrl: './loginx.component.html',
  styleUrls: ['./loginx.component.css'],
})
export class LoginxComponent implements OnInit {
  userForm: FormGroup;
  responseData: any;
  employees: any;
  userDetails: any;
  appcomponentValue: string;
  credentials = {
		'userName':'',
		'password':''
	}
  constructor (private router: Router, private fb: FormBuilder, private authService: AuthService) {

  }

  ngOnInit() {
    this.userForm	=	this.fb.group({
      username	:	['', Validators.required],
      password	:	['', Validators.required]
    });
  }
  test(data) {
    this.appcomponentValue = 'Test Data';
    this.authService.login(data)
    .subscribe(
      response => {
        this.responseData = response;
        if (response.execution === '1' ) {
          localStorage.setItem('userData', JSON.stringify(this.responseData));
          this.authService.loadUserInfo();
          this.authService.userDetail();
          this.router.navigate(['./home']);
        } else {
        }
      }
    )    
  }
}
