import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(id, password) {
    return this.http.post('/api', {
      'operation': 'auth_user',
      'operation_args': {
        'id': id,
        'password': password
      }
    }).subscribe(data => {
      console.log(data)
    })
  }

}
