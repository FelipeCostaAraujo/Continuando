import { ContactProvider } from './../../providers/contact/contact';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contacts: Observable<any>;

  constructor(public navCtrl: NavController, private provider: ContactProvider,
    private toast: ToastController) {

    this.contacts = this.provider.getAll();
  }

 
}