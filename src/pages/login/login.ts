import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import arryName from '../../app/arryName';
import { RegisterPage} from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user;
  pass;

  // itemTapped(event, item) {
  //   // That's right, we're pushing to ourselves!
  //   this.navCtrl.push(LoginPage, {
  //     item: item
  //   });
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  register(){
    this.navCtrl.push(RegisterPage);
  
  }
  login(username,password)
  {

  for(let i = 0;i< arryName.length; i++)
    {

      
        this.user = arryName[i].username;
        this.pass = arryName[i].pin; 
    }

    if(  username==this.user  &&  password==this.pass)
    {
    
        const confirm = this.alertCtrl.create({
          title: 'Login Successful',
          message: 'You have successfully logged in',
          buttons: [
            {
              text: 'ok',
              handler: () => {
                this.navCtrl.setRoot(ProfilePage);
              }
            }
          ]
        });
        confirm.present();

    }
    else if (arryName.length ==null){

      const confirm = this.alertCtrl.create({
        title: 'Login Unsuccessful',
        message: 'please register to be able to login',
        buttons: [
          {
            text: 'ok',
            handler: () => {
              this.navCtrl.setRoot(ProfilePage);
            }
          }
        ]
      });
      confirm.present();
    }
    else{
      const confirm = this.alertCtrl.create({
        title: 'Login Unsuccessful',
        message: 'incorrect details',
        buttons: [
          {
            text: 'ok',
            handler: () => {
              this.navCtrl.setRoot(LoginPage);
            }
          }
        ]
      });
      confirm.present();
    }
  }

}

