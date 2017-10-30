import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
  private loggedIn = false;
  user_data: any;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private http:Http) {
    this.loggedIn = !localStorage.getItem('userData');
  }
  login(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost/slim/public/login', JSON.stringify(user), { headers: headers })
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error || {message: "Server Error"}));
  }
  logout(token) {
    let headers=new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost/slim/public/logout', JSON.stringify(token), { headers: headers })
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error || {message: "Server Error"}));
  }
  isLoggedIn() {
    return this.loggedIn;
  }
  chkLogin() {
    var userData = localStorage.getItem('userData');
    if (userData)
      return this.loggedIn = true;
    else
      return this.loggedIn = false;
  }
  userLogout() {
      localStorage.clear();
      this.chkLogin();
  }
  userData() {
    return this.user_data = [{
      'name': 'pradeep',
      'age': '25'
    }]
  }
}
