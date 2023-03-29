import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  picture : string 
  title: string 
  age: number 
  quote : string 

  constructor() {
    this.picture = "https://randomuser.me/api/portraits/lego/2.jpg";
    this.title = "Hello John";
    this.age = 25;;
    this.quote = "";
  }

  resetQuote() {
    this.quote = "";
  }

}
