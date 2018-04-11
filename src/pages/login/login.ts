import { Component,ViewChild } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../cadastrar/signup';
import { User } from '../../providers/auth/user';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  face = {
    FaceLogin: false,
    name: '',
    profilePicture: '',
    email: '',
    lastSignInTime: ''
  }
  loginData = {
    email: '',
    password: ''
  }

  constructor(
    public navCtrl: NavController,
    private fire: AngularFireAuth,
    public facebook: Facebook,
    private platform: Platform,
    private toastCtrl: ToastController,
    private authProvider: AuthProvider
  ) {

  }

  
  loginFacebook() {

    if (this.platform.is('cordova')) {
      
      return this.facebook.login(['email', 'public_profile']).then(res => {
        
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential).then((info)=>{
          alert(JSON.stringify(info));
        const objeto_retorno = info;
        
        this.face.name = objeto_retorno.displayName;
        this.face.profilePicture = objeto_retorno.photoURL;
        this.face.email = objeto_retorno.email;
        this.face.lastSignInTime = objeto_retorno.metadata.lastSignInTime;
        
        })
        
      })
    }
    else {
      return this.fire.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => {
          console.log(res)
          this.face.name = res.user.displayName;
          this.face.email = res.user.email;
          this.face.profilePicture = res.user.photoURL;
          this.face.lastSignInTime = res.user.metadata.lastSignInTime;
    })
   
  }
  
}


signIn() {
  if (this.form.form.valid) {
    this.authProvider.signIn(this.user)
      .then(() => {
        this.navCtrl.push(TabsPage);
      })
      .catch((error: any) => {
        let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
        if (error.code == 'auth/invalid-email') {
          toast.setMessage('O e-mail digitado não é valido.');
        } else if (error.code == 'auth/user-disabled') {
          toast.setMessage('O usuário está desativado.');
        } else if (error.code == 'auth/user-not-found') {
          toast.setMessage('O usuário não foi encontrado.');
        } else if (error.code == 'auth/wrong-password') {
          toast.setMessage('A senha digitada não é valida.');
        }
        toast.present();
      });
  }
}
  signup() {
    this.navCtrl.push(SignupPage, { email: this.loginData.email });
  }

  irHome(){
    this.navCtrl.push(TabsPage);
  }

}
