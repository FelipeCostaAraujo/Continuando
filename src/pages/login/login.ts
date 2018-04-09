import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  PegaDados = new Array<any>();


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
    private toastCtrl: ToastController
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
        this.irHome();
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
          this.irHome();
    })
   
  }
  
}


  //Login com facebook usando firebase 
  login() {
    this.fire.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
      .then(auth => {
        // Do custom things with auth
      })
      .catch(err => {
        // Handle error
        let toast = this.toastCtrl.create({
          message: err.message,
          duration: 1000
        });
        toast.present();
      });
  }
  signup() {
    this.navCtrl.push(HomePage, { email: this.loginData.email });
  }

  irHome(){
    this.navCtrl.push(TabsPage);
  }


  logout() {
    this.fire.auth.signOut();
    this.face.FaceLogin = false;
  }



}
