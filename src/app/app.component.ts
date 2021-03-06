import { Component } from '@angular/core';
import {Movie} from "./model/movie.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  movies: Array<Movie> = [new Movie('Avatar',2020),new Movie('Transformer',2020)];

  movieLikeChanged(movie:Movie)
  {
    console.log('Movie like changed ',movie);
  }
}
