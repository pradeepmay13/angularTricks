import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service'
import { Http, Response, Headers } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
	userForm: FormGroup;
	responseData : any;
	userDetails:any;
	isLoggedin:any = true;
	constructor(private router: Router, private fb: FormBuilder, private loginService:LoginService, private toastr: ToastsManager, private _vcr: ViewContainerRef) 
	{ 
		this.toastr.setRootViewContainerRef(_vcr);
		this.toastr.onClickToast()
    	.subscribe( toast => {  
    		 this.toastr.dismissToast(toast); 
	    });
	    if(this.userDetails!=null && this.userDetails.token!=''){
  			this.isLoggedin = false;
  		}else{this.isLoggedin = true;}
	}

	ngOnInit() {
		this.userForm	=	this.fb.group({
			username	:	["", Validators.required],
			password	:	["", Validators.required]
		})
	}
	onSubmit(){
		this.loginService.login(this.userForm.value)
		.subscribe(
			response=>{
				this.responseData = response;
				//{message: "Success", username: "admin", execution: "1", token: "admin | 598c39ab65ab0598c39ab65ab0598c39ab65ab0"}
				if(response.execution=="1"){
					//redirection code
					localStorage.setItem('userData', JSON.stringify(this.responseData));
					this.isLoggedin = false;
					this.router.navigate(['./home']);
					this.toastr.success("Success", 'You are on right track.');
					//alert(localStorage.userData);
				}
				else{
					this.toastr.error("Error", 'Username or Password is wrong please try again!');
				}
			}
		)
	}
}
