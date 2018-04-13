import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  PegaDados = new Array<any>();
  FaceLogin = false;

  face = {

    name: '',
    profilePicture: '',
    email: '',
    lastSignInTime: ''
  }



  constructor(
    public navCtrl: NavController,
    private fire: AngularFireAuth,
    public facebook: Facebook,
    private toastCtrl: ToastController,
    private authProvider: AuthProvider
  ) {

    const authObserver = fire.authState.subscribe(user => {
      if (user) {
        this.FaceLogin = true;
        this.face.name = user.displayName;
        this.face.profilePicture = user.photoURL;
        this.face.email = user.email;
        this.face.lastSignInTime = user.metadata.lastSignInTime

        authObserver.unsubscribe();

      }
    })
  }

  signOut() {
    this.authProvider.signOut()
      .then(() => {

        this.navCtrl.push(LoginPage);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }

}