import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConfigurationComponent } from './configuration/configuration.component';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'configuration', component: ConfigurationComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(ROUTES) ],
})
export class AppRoutingModule { }
