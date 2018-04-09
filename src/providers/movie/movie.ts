import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  

  constructor(public http: Http) {
    console.log('Dados de MovieProvider ');
  }
  getLatestMovies(page = 1){
   return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=2a7b46f54b26b149d9dea918c15f0909&language=pt-BR`);
  }
  getMovie(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=2a7b46f54b26b149d9dea918c15f0909&language=pt-BR`);
    
   }
  getTrailer(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}/videos?api_key=2a7b46f54b26b149d9dea918c15f0909&language=pt-BR`);
  }

  getPersonalizado(busca){
    return this.http.get(this.baseApiPath + `/movie/${busca}?&api_key=2a7b46f54b26b149d9dea918c15f0909&language=pt-BR`);
   }
   getUpcoming(){
    return this.http.get(this.baseApiPath + `/movie/upcoming?&api_key=2a7b46f54b26b149d9dea918c15f0909&language=pt-BR`);
   }

}
