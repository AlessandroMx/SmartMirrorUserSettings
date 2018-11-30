import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { NavigationComponent } from './configuration/navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './configuration/profile/profile.component';
import { AuthService } from './login/auth.service';
import { UpdateService } from './configuration/update.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ConfigurationComponent,
    NavigationComponent,
    PageNotFoundComponent,
    ProfileComponent
  ],
  providers: [
    AuthService,
    UpdateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
