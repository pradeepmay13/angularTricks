import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ LoginService ],

})
export class HeaderComponent implements OnInit {
  userDetails: any={};
  isLoggedin: any = true;
  responseData: any;
  u_Data: any= [];
  constructor(private router: Router, private loginService: LoginService) {
  }
  ngOnInit() {
    
  }
  ngOnChanges(){
  }

  onLogout() {
    localStorage.clear();
    this.loginService.chkLogin();
    this.router.navigate(['./login']);
  }

}
