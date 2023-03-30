import { Routes } from '@angular/router';
// import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const ROUTES: Routes = [
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'signup', component: SignupComponent},
    {path:"", component:UserProfileComponent}
];

export { ROUTES };