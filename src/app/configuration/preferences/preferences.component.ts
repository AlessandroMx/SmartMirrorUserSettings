import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/login/iuser';
import { AuthService } from 'src/app/login/auth.service';
import { UpdateService } from '../update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  user: IUser
  isActiveModal: boolean = false

  twitter: string
  twitterPassword: string
  mail: string
  mailPassword: string


  constructor(private Auth: AuthService, private Update: UpdateService, private router: Router) { }

  ngOnInit() {
    if (!this.Auth.isAuthenticated()) {
      this.router.navigate(['/'])
    } else {
      this.user = this.Auth.currentUser
    }
  }

  updateUser(formValues) {
    const twitter = formValues.twitter
    const twitterPassword = formValues.twitterPassword
    const mail = formValues.mail
    const mailPassword = formValues.mailPassword
    let argsToSend = {
      "id": this.user.id,
      "twitter": twitter,
      "twitter_password": twitterPassword,
      "mail": mail,
      "mail_password": mailPassword
    }
    this.Update.updateUser(argsToSend)
      .subscribe(resp => {
        console.log(resp)
      })
  }

}
