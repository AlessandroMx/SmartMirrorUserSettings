import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: string = ""
  password: string = ""

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(formValues) {
    const id = formValues.id
    const password = formValues.password
    this.Auth.getUserDetails(id, password)
  }

}
