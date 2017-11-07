import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService, private authService: AuthService) {
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
