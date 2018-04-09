import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [MovieProvider]
})
export class FilmeDetalhesPage {
  public filme;
  public filmeid;
  public youtube = "https://www.youtube.com/watch?v=";
  public key ;
  public youtube2 = "https://www.youtube.com/embed/";
  

  constructor(

    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider:MovieProvider
  ) {

  } 
  public pegaTrailer(){
    
    this.movieProvider.getTrailer(this.filmeid).subscribe(data=>{
      let retorno = (data as any)._body;
      this.key = JSON.parse(retorno).results[0].key;
      },error=>{
        console.log(error);
  
      })
  }

  ionViewDidEnter() {

    this.filmeid = this.navParams.get("id");

    this.pegaTrailer();

    this.movieProvider.getMovie(this.filmeid).subscribe(data=>{
    let retorno = (data as any)._body;
    this.filme = JSON.parse(retorno);
    },error=>{
      console.log(error);

    })
  }

}
