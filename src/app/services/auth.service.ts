import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import {CoolLocalStorage} from 'angular2-cool-storage';
import {Router} from '@angular/router';
//import * as _ from 'underscore';
declare var window: any;

@Injectable()
export class AuthService {
  loggedInUser: any;
  isUserLoggedIn: boolean = false;
  userDetailDataX:any;
  userName:any;
  constructor(private http: Http, private router: Router) {//private localStorage: CoolLocalStorage
    this.loadUserInfo();
  }
  login(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost/slim/public/login', JSON.stringify(user), { headers: headers })
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error || {message: "Server Error"}));
  }
  loadUserInfo() {
    const user = localStorage.getItem('userData') ? localStorage.getItem('userData') + '' : '';
    if (user) {
      this.loggedInUser = JSON.parse(user);
      if (this.loggedInUser) {
        this.isUserLoggedIn = true;
      }
    }
    else {
    	this.isUserLoggedIn = false;
    }
  }

  getUserData(){
  	let username
  	 username = this.loggedInUser.userName;
  	 return username
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
            this.userDetailDataX=response.resultSet[0];  
          //}else{
          //  this.userDetailData
          //}
        }
      )
    }
    
  }

}