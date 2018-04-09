import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ContatoProvider } from './../../providers/contato/contato';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  title: string;
  form: FormGroup;
  contact: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private provider: ContatoProvider
    , private toast: ToastController) {



    this.contact = this.navParams.data.contact || {};
    this.createForm();
    this.setupPageTitle();




  }

  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterando Contato' : 'Novo contato';
  }
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.contact.key],
      name: [this.contact.name, Validators.required],
      tel: [this.contact.tel, Validators.required],
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000 }).present();
          console.error(e);
        });
        
    }
  }


}
