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
  userData: any;
  userDetails: any={};
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private http: Http) {
  }
  login(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost/slim/public/login', JSON.stringify(user), { headers: headers })
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error || {message: "Server Error"}));
  }
  logout(token) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost/slim/public/logout', JSON.stringify(token), { headers: headers })
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error || {message: "Server Error"}));
  }
  isLoggedIn() {
    return this.loggedIn;
  }
  chkLogin() {
    this.userData = localStorage.getItem('userData');
    if (this.userData)
      return this.loggedIn = true;
    else
      return this.loggedIn = false;
  }
  userLogout() {
      localStorage.clear();
      this.chkLogin();
  }
  getUser(token) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost/slim/public/user', JSON.stringify(token), { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error || {message: 'Server Error'}));
    //}
    
  }
  userDetail(){
    const data = JSON.parse(localStorage.getItem('userData'));
    const token=data.token;
    if(data!=null) {
      this.getUser(token)
      .subscribe(
        response=>{
          if (response.execution === true ) {          
            this.userDetails=response.resultSet[0];
            console.log(this.userDetails);
          }
          else{
            //response.execution;
          }
        }
      )
    }


    /*return [
      {name: 'Pradeep', age: '28', gender: 'Male', email: 'pradeep@gmail.com'}
    ]*/
  }
}
