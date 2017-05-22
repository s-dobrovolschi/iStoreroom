import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Nav } from 'ionic-angular';
import { iStoreroom } from '../../app/app.component';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    //TODO Authentication logic
    this.navCtrl.setRoot(iStoreroom);
  }
}
