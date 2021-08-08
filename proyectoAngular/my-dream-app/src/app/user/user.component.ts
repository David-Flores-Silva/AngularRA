import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() nameGamers: any;

  ngOnInit(): void {
  }

  name : string = "David Flores Silva";
  age : number = 18;
  title = 'my-dream-app';
  gamers = ["Mario Bros", "Kin Kon", "pin-pon", "pack-man"];

  namee : string;
  tamanio : string;
  fecha : number=1998;
  showGamers : boolean;

  constructor(){
    console.log("constructor warning...");
    this.namee = "Juego#";
    this.tamanio = "4 Mb";
    this.fecha = 1989;
    this.showGamers = false;
  }
  

  toggleHobbies(){
    this.showGamers = !this.showGamers;
  }

  newHobby(hobby: { value: string; }){
    //console.log(hobby.value);
    this.gamers.push(hobby.value);
    hobby.value="";
    return false;
  }



  deleteUser(user: string){
    for(let i=0; i<this.gamers.length; i++){
      if (user == (this.gamers[i])){
        this.gamers.splice(i,1);
      }
    }
  }

  
  addUser(newUser: { value: string; focus: () => void; }){
    this.gamers.push(newUser.value);
    newUser.value="";
    newUser.focus();
    return false;
    
  }  
  

}
