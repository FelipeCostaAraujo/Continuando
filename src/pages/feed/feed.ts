import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Felipe Costa",
    data: "Março 15, 2018",
    descricao: "Meu app agora consome api, estou usando o json...",
    qntd_likes: 12,
    qntd_comments: 6,
    time_comments: "1h atras..."
  }


  public lista_filmes = new Array<any>();
 public page = 1;


  public nome_usuario: string = "Felipe Costa Araujo";

  public loader;
  public isRefreshing: boolean = false;
  public refresher;
  public infiniteScroll;
  public busca;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }
  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  abrirCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",

    });
    this.loader.present();
  }

  fecharCarregamento() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFilmes();

  }


  ionViewDidEnter() {


  this.carregarFilmes();


  }

  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage,{id: filme.id});
  }
  doInfinite(infiniteScroll) {

    this.infiniteScroll = infiniteScroll;
    this.page++;
    this.carregarFilmes(true);

  }
  carregarFilmes(novaPagina: boolean = false){
    this.abrirCarregando();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        if(novaPagina){
          this.lista_filmes = this.lista_filmes.concat( objeto_retorno.results);
          this.infiniteScroll.complete();
        }else{
        this.lista_filmes = objeto_retorno.results;
      }


        console.log(objeto_retorno);

        this.fecharCarregamento();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      },error =>{
        console.log(error);
        this.fecharCarregamento();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    )
    
  
  }

}
