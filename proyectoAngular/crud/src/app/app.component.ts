import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent {
  peliculas:any;
  selectionMovie:any;

  constructor(private api:ApiService) {
    this.getMovies();
    this.selectionMovie = {id:-1, title:"", desc:"", year:0}
  }
  
  getMovies = () => {
    this.api.getAllMovies().subscribe (
      data => {
        this.peliculas = data;
      },
      error => {
        console.log(error);
      }    
    )  
  } 


  movieClicked = (movie:any) => { 
    this.api.getOneMovie(movie.id).subscribe(
      data => {
        this.selectionMovie = data;
      },
      error => {
        console.log(error);
      } 
    );
  }

  UpdateMovie = () => {
    this.api.updateMovie(this.selectionMovie).subscribe(
      data => {
        this.getMovies();
      },
      error => {
        console.log(error);
      } 
    );
  }

  CreateMovie = () => {
    this.api.createMovie(this.selectionMovie).subscribe(
      data => {
        this.peliculas.push(data);
      },
      error => {
        console.log(error);
      } 
    );
  }

  DeleteMovie = () => {
    this.api.deleteMovie(this.selectionMovie).subscribe(
      data => {
        this.getMovies();
      },
      error => {
        console.log(error);
      } 
    );
  }
}



