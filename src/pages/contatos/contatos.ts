import { ContactProvider } from './../../providers/contact/contact';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the ContatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage {
  contacts: Observable<any>;

  constructor(public navCtrl: NavController, private provider: ContactProvider,
    private toast: ToastController) {

    this.contacts = this.provider.getAll();

    alert(this.contacts);
  }

  newContact() {
    this.navCtrl.push('ContactEditPage');
  }

  editContact(contact: any) {
    // Maneira 1
    this.navCtrl.push('ContactEditPage', { contact: contact });

    // Maneira 2
    // this.navCtrl.push('ContactEditPage', { key: contact.key });
  }

  removeContact(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }
}