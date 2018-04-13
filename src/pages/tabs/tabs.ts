import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { PerfilPage } from '../perfil/perfil';
import { SobrePage } from '../sobre/sobre';
import { LoginPage } from '../login/login';
import { ChatPage } from '../chat/chat';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = FeedPage;
  tab3Root: any = ConfiguracoesPage;
  tab4Root: any = PerfilPage;
  tab5Root: any = SobrePage;
  tab6Root: any = ChatPage;
  

  constructor() {

  }
}
