import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UpdateService {

  constructor(private http: HttpClient) { }

  updateUser(data) {
    let options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        }
      )
    }
    let request = {
      "operation": 'update_user',
      "operation_args": data
    }
    return this.http.post('/api', request, options)
      .pipe(tap(data => {
        console.log(data['response']);
      }))
      .pipe(catchError(err => {
        return of(false)
      }))
  }

}
