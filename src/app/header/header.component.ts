import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[LoginService]
})
export class HeaderComponent implements OnInit {

  userDetails:any;
  isLoggedin:any = true;
  responseData : any;
  constructor(private router:Router, private loginService:LoginService){

  } 
  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data;
    //console.log(this.userDetails.token);
    if(this.userDetails!=null && this.userDetails.token!=''){
      this.isLoggedin = true;
    }else{
      this.isLoggedin = false;
    }
  }
  onLogout(){
      this.loginService.logout(this.userDetails.token)
      .subscribe(
        response=>{
          this.responseData = response;
          if(response.execution===true){
            //redirection code
            localStorage.clear();
            this.isLoggedin = false;
            this.router.navigate(['./login']);

            //this.toastr.error("LogOut", 'You are on right track.');
          }
          else{
            //this.toastr.error("Error", 'Username or Password is wrong please try again!');
          }
        }
      )
  }
}
