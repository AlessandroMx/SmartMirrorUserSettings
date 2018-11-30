import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';
import { UpdateService } from '../update.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/login/iuser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: IUser
  isActiveModal: boolean = false

  name: string
  lastName: string
  description: string
  gender: string


  constructor(private Auth: AuthService, private Update: UpdateService, private router: Router) { }

  ngOnInit() {
    if (!this.Auth.isAuthenticated()) {
      this.router.navigate(['/'])
    } else {
      this.user = this.Auth.currentUser
    }
  }

  updateUser(formValues) {
    const name = formValues.name
    const lastName = formValues.lastName
    const description = formValues.description
    const gender = formValues.gender
    let argsToSend = {
      "id": this.user.id,
      "name": name,
      "last_name": lastName,
      "description": description,
      "gender": gender
    }
    this.Update.updateUser(argsToSend)
      .subscribe(resp => {
        console.log(resp)
      })
  }

}
