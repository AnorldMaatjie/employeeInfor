import { Component } from '@angular/core';
import { NavController,AlertController  } from 'ionic-angular';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  signIn(){
    this.navCtrl.push(LoginPage);
  
  }
}
