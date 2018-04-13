import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http"
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { FilmeDetalhesPageModule } from '../pages/filme-detalhes/filme-detalhes.module';
import { MenuPageModule } from '../pages/menu/menu.module';

import { Facebook } from '@ionic-native/facebook';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPageModule } from '../pages/login/login.module';
import { ContactProvider } from '../providers/contact/contact';
import { ContactEditPageModule } from '../pages/contact-edit/contact-edit.module';
import { ContatosPageModule } from '../pages/contatos/contatos.module';
import { ContatosPage } from '../pages/contatos/contatos';
import { AuthProvider } from '../providers/auth/auth';
import { ResetSenhaPageModule } from '../pages/reset-senha/reset-senha.module';
import { SignupPageModule } from '../pages/cadastrar/signup.module';
import { MenuPage } from '../pages/menu/menu';
import { FilmeDetalhesPage } from '../pages/filme-detalhes/filme-detalhes';
import { PerfilPage } from '../pages/perfil/perfil';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { SobrePage } from '../pages/sobre/sobre';
import { ResetSenhaPage } from '../pages/reset-senha/reset-senha';
import { SignupPage } from '../pages/cadastrar/signup';
import { LoginPage } from '../pages/login/login';
import { GooglePlus } from '@ionic-native/google-plus';
import { FeedPage } from '../pages/feed/feed';
import { IntroPage } from '../pages/intro/intro';
import { ChatPage } from '../pages/chat/chat';


const config = {
  apiKey: "AIzaSyDMMO5Efv2t6N3U2XC7afgb2UZYZgIeYU0",
  authDomain: "continuandofire.firebaseapp.com",
  databaseURL: "https://continuandofire.firebaseio.com",
  projectId: "continuandofire",
  storageBucket: "continuandofire.appspot.com",
  messagingSenderId: "35454275956"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    ContatosPage,
    ConfiguracoesPage,
    PerfilPage,
    FilmeDetalhesPage,
    MenuPage,
    SobrePage,
    ResetSenhaPage,
    SignupPage,
    LoginPage,
    FeedPage,
    IntroPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    ContatosPage,
    ConfiguracoesPage,
    PerfilPage,
    FilmeDetalhesPage,
    MenuPage,
    SobrePage,
    ResetSenhaPage,
    SignupPage,
    LoginPage,
    FeedPage,
    IntroPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Facebook,
    ContactProvider,
    AuthProvider,
    GooglePlus

   
  ]
})
export class AppModule { }
