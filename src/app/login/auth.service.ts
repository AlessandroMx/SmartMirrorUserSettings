import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { IUser } from './iuser';
import { of } from 'rxjs';

@Injectable()
export class AuthService {

  currentUser: IUser

  constructor(private http: HttpClient) { }

  loginUser(id, password) {
    let options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        }
      )
    }
    let request = {
      "operation": 'auth_user',
      "operation_args": {
        "id": id,
        "password": password
      }
    }
    // this.http.post('/api', request, options).subscribe(data => {
    //   console.log(data)
    // })
    return this.http.post('/api', request, options)
      .pipe(tap(data => {
        console.log(data['response']);
        this.currentUser = <IUser>data['response'];
      }))
      .pipe(catchError(err => {
        return of(false)
      }))
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

}
