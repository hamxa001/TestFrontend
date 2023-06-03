import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router, private jwtHelper: JwtHelperService) { }

  public saveAuthData(token:string){
    localStorage.setItem('token', token);
  }

  public logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/login']);
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public isAuthenticated() {
    const token:any = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  getDecodedToken(): any {
    try {
      return jwt_decode(this.getToken() ?? '');
    } catch(Error) {
      return null;
    }
  }

  getUserId(){
    let decodedToken = this.getDecodedToken();
    return decodedToken?.nameid;
  }

}
