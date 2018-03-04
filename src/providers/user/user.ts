import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;

  constructor(public api: Api) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    let seq = this.api.post('api-token-auth/', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.token) {
        this._loggedIn(res.token);
      } else {      
      }
    }, err => {
      console.error('ERROR', err);
      console.log('islogin', this.isAuthenticated())
    });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    localStorage.removeItem('token')
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    localStorage.setItem('token', resp)
    console.log('islogin', this.isAuthenticated())
  }

  // tokenNotExpired(token){
  //   if(token){
  //     this.api.post('api-token-verify/', token).subscribe((res: any) => {
  //       return true;
  //     }, err => {
  //       console.error('ERROR', err);
  //       return false;
  //     });
  //   }
  //   else{
  //     return false;
  //   }
  // }
  
  public getToken(): string {
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    if(token){
      return true;
    }
    else{
      return false;
    }
  }
  
}
