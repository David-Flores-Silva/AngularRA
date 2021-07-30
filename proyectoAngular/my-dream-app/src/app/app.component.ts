import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email;
  webpage : string;
  hobbys : string[];
  showHobbies : boolean;

  constructor(){
    console.log("constructor warning...");
    this.name = "David Flores Silva";
    this.email = "dfloressi@unsa.edu.pe";
    this.webpage = "https://www.unsa.edu.pe/";
    this.hobbys = ["futbol", "tenis", "pin-pon"];
    this.showHobbies = false;
  }


  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
}
