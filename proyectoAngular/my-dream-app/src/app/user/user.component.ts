import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscriber, Subscription } from 'rxjs';


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
  gamers = ["Mario Bros", "Kin Kon", "pin-pon", "pack-man"];

  imagen : File | undefined;
  namee : string;
  tamanio : string;
  fecha : Date | undefined;

  constructor(private http: HttpClient){
    console.log("constructor warning...");
    this.imagen;
    this.namee = "Juego#";
    this.tamanio = "4 Mb";
    this.fecha;
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
