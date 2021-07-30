import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ["ryan", "joe", "cameron", "jhon"];
  activated = false;

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

  newHobby(hobby: { value: string; }){
    //console.log(hobby.value);
    this.hobbys.push(hobby.value);
    hobby.value="";
    return false;
  }

  sayHello() {
    alert("Hola desde app.component.ts");
  }

  deleteUser(user: string){
    for(let i=0; i<this.users.length; i++){
      if (user == (this.users[i])){
        this.users.splice(i,1);
      }
    }
  }

}
