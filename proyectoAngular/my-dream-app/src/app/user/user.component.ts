import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() nameUser: any;

  constructor() { }

  ngOnInit(): void {
  }


  sayhello(nameUser: { value: string; }) {
    alert("Hola " + nameUser);
  }
}
