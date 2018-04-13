import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-reset-senha',
  templateUrl: 'reset-senha.html',
})
export class ResetSenhaPage {
  userEmail: string ='';
  @ViewChild('form') form:NgForm;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private toastCtrl: ToastController
  ) {
  }

 resetPassword(){
   if(this.form.form.valid){
     let toast = this.toastCtrl.create({duration:3000,position: 'bottom' });
     this.authProvider.resetSenha(this.userEmail)
     .then(()=>{
       toast.setMessage('Solicitação foi enviada para o seu email');
       toast.present();
       this.navCtrl.pop();
     })
     .catch((error:any) =>{
        if(error.code == 'auth/invalid-email'){
        toast.setMessage('Email invalido');
        }else if(error.code == 'auth/user-not-found'){
        }
          toast.setMessage('Usuario não encontrado');
        
        toast.present();
     });
   }
 }

}
