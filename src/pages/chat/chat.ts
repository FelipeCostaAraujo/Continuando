import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';



@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  mensagens: AngularFireList<any[]>;
  usuario: any = '';
  private PATH = 'mensagens/';
  mensagem = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {


    const authObserver = afAuth.authState.subscribe(user => {
      console.log(user);
      this.usuario = user;

      this.mensagens = this.afDatabase.list(this.PATH);
      authObserver.unsubscribe();
    })
  }
  enviarMensagem(msg:any) {
    return new Promise((resolve, reject) => {
      if (msg) {
        this.afDatabase.list(this.PATH)
          .update(msg, { mensagem: msg, usuario: this.usuario })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.afDatabase.list(this.PATH)
          .push({ mensagem:msg, usuario: this.usuario })
          .then(() => resolve());
      }
    })
  }
}
