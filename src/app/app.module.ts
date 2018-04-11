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


var config = {
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
    ContatosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpModule,
    ConfiguracoesPageModule,
    PerfilPageModule,
    FilmeDetalhesPageModule,
    MenuPageModule,
    SobrePageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    LoginPageModule,
    AngularFireDatabaseModule,
    ResetSenhaPageModule,
    SignupPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    ContatosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Facebook,
    ContactProvider,
    AuthProvider

   
  ]
})
export class AppModule { }
