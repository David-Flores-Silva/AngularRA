import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent {
  peliculas : any;
  title:any;
  desc:any;
  year:any;

  constructor(private api:ApiService) {
    this.getMovies();
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
        this.title = data.title;
        this.desc = data.desc;
        this.year = data.year;
      },
      error => {
        console.log(error);
      } 
    );
  }


  addMovie(newMovie: any){
    this.peliculas = (newMovie);
    newMovie.value = "";
    newMovie.focus();
    return false;
  }

  deleteMovie(movie:any){
    for(var i=0; i<this.peliculas.length; i++){
      if(movie==this.peliculas[i]){
        this.peliculas.splice(i,1)
      }
    }
  }

}



