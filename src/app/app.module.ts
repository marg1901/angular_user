import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    MenuComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
