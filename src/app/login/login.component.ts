import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: string = ""
  password: string = ""
  loginInvalid: boolean = false

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(formValues) {
    const id = formValues.id
    const password = formValues.password
    this.Auth.loginUser(id, password)
      .subscribe(resp => {
        console.log(resp)
        if (!resp['response']) {
          this.loginInvalid = true
        } else {
          this.router.navigate(['configuration'])
        }
      })
  }

}
