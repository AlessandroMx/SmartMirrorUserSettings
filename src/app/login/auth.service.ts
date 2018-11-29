import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(id, password) {
    return this.http.post('http://localhost:8086/', {
      id,
      password
    }).subscribe(data => {
      console.log(data)
    })
  }

}
