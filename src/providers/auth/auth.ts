import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';


@Injectable()
export class AuthProvider {
  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth,
    private googlePlus: GooglePlus,
    private facebook: Facebook,
    private platform: Platform) {
    this.user = angularFireAuth.authState;
  }
  createUser(user: User) {
    return this.angularFireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password);
  }
  signIn(user: User) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }
  signOut() {
    return this.angularFireAuth.auth.signOut();
  }

  resetSenha(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);

  }
  signInWithGoogle() {
    if (this.platform.is('cordova')) {
    return this.googlePlus.login({
      'webClientId': '35454275956-rumoc22pgh9v6qfr0ts8p9m1g2dspimt.apps.googleusercontent.com',
      'offline': true
    })
      .then(res => {
        return this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          .then((user: firebase.User) => {
            // atualizando o profile do usuario
            return user.updateProfile({ displayName: res.displayName, photoURL: res.imageUrl });
          });
      });
    }else {
      return this.angularFireAuth.auth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => {
          console.log(res)

        })
    }
  }


  LoginComFacebook2() {
    if (this.platform.is('cordova')) {
      return this.facebook.login(['public_profile', 'email', 'user_friends'])
        .then((res: FacebookLoginResponse) => {
          //https://developers.facebook.com/docs/graph-api/reference/user
          //Ao logar com o facebook o profile do usuario é automaticamente atualizado.
          alert(res);
          return this.angularFireAuth.auth.signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
        });
    } else {
      return this.angularFireAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => {
          console.log(res)

        })

    }

  }

  signOut2()  {
    if (this.angularFireAuth.auth.currentUser.providerData.length) {
      for (var i = 0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++) {
        var provider = this.angularFireAuth.auth.currentUser.providerData[i];

        if (provider.providerId == firebase.auth.GoogleAuthProvider.PROVIDER_ID) { // Se for o gooogle
          // o disconnect limpa o oAuth token e tambem esquece qual conta foi selecionada para o login
          return this.googlePlus.disconnect()
            .then(() => {
              return this.signOut();
            });
        } else if (provider.providerId == firebase.auth.FacebookAuthProvider.PROVIDER_ID) { // Se for facebook
          return this.facebook.logout()
            .then(() => {
              return this.signOut();
            })
        }
      }

  }
}


}
