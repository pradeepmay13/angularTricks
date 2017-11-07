import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
  loggedIn = false;
  userData: any;
  userDetailData: any={};
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
  //isLoggedIn() {
  //  return this.loggedIn;
  //}
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
    
    if(data!=null) {
      const token=data.token;
      this.getUser(token)
      .subscribe(
        response=>{
          //if (response.execution === true ) {    
            this.userDetailData=response.resultSet[0];
            console.log(this.userDetailData);
          //}else{
          //  this.userDetailData
          //}
        }
      )
    }


    /*return [
      {name: 'Pradeep', age: '28', gender: 'Male', email: 'pradeep@gmail.com'}
    ]*/
  }
}
