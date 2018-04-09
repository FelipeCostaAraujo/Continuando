import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
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
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPageModule } from '../pages/login/login.module';





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
    ContactPage,
    HomePage,
    TabsPage
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
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Facebook

   
  ]
})
export class AppModule { }
