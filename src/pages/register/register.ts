import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ProfilePage} from '../profile/profile';
import arryName from '../../app/arryName';
import {Details} from '../../app/classInfor'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  url ='http://www.dealnetcapital.com/files/2014/10/blank-profile.png';

  insertImage(event: any){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files);
    }
  }

  // 
  Details(fname,lname,id,email,role,username,pin, url){
    // var temp = image.replace("fakepath"," ");
    // temp = temp.split(" ",2);
    // var str = temp[1];
    // str = str.substring(1,str.length);
    // var url = "../../assets/imgs/" + str;
    // image = url;

    
    let object=new Details(lname,fname,id,email,role,username,pin,this.url);
    if(object!=null){
      arryName.push(object);
      console.log(arryName);
      this.navCtrl.push(ProfilePage);

    }
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
