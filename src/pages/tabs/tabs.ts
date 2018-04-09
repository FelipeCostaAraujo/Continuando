import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { PerfilPage } from '../perfil/perfil';
import { SobrePage } from '../sobre/sobre';
import { LoginPage } from '../login/login';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedPage;
  tab3Root = ConfiguracoesPage;
  tab4Root = PerfilPage;
  tab5Root = SobrePage;
  tab6Root = LoginPage;
  

  constructor() {

  }
}
