import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { NavigationComponent } from './configuration/navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ConfigurationComponent,
    NavigationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
