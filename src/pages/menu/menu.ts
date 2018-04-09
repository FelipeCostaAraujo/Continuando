import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers: [MovieProvider]
})
export class MenuPage {
 public busca;
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public movieProvider:MovieProvider
    ) {
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
