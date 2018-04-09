import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { SobrePage } from '../sobre/sobre';
import { MenuPage } from '../menu/menu';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  rootPage = MenuPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }
  abrirPerfil(){
   this.navCtrl.push(PerfilPage);
  }
  abrirSobre(){
    this.navCtrl.push(SobrePage);
   }
   abrirContatos(){
    this.navCtrl.push(ContactPage);
   }
}
