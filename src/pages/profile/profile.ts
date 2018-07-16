import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import arryName  from '../../app/arryName';
import {Details} from '../../app/classInfor';


import { getLocaleDayNames } from '@angular/common';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

// array
test = arryName;
// delete
delete (object){
  arryName.splice(arryName.indexOf(object),1)
}


// 

updateEmp(b) {
 
  let alert = this.alertCtrl.create({
    title: 'Update',
    inputs: [
      {
        name: 'fname',
        // placeholder:arryName[b].fname,
      },
      {
        name: 'lname',
        // placeholder:arryName[b].lname,
      }
      ,
      {
        name: 'id',
        // placeholder:arryName[b].id,
      }
      ,
      {
        name: 'email',
        // placeholder:arryName[b].email,
      }
      ,
      {
        name: 'role',
        // placeholder:arryName[b].role,
      }
      ,
      {
        name: 'username',
        // placeholder:arryName[b].username,
      }
      ,
      {
        name: 'pin',
        // placeholder:arryName[b].pin,
      }
    
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Update',
        handler: data => {
           
          // let empFname = arryName[b].fname;
          // let emplname = arryName[b].lname;
          // let empId = arryName[b].id;
          // let empEmail = arryName[b].email;
          // let empRole = arryName[b].role;
          // let empUser = arryName[b].username;
          // let empPin = arryName[b].pin;
       




        
          console.log(data.image);

          // var temp = data.image.replace("fakepath"," ");
          // temp = temp.split(" ",2);
          // var str = temp[1];
          // str = str.substring(1,str.length);
          // var url = "../../assets/imgs/" + str;
          // data.image = url;
          var img ="";
          let obj = new Details(data.fname, data.lname,data.id,data.email,data.role,data.username,data.pin,img);
         this.test.splice(b,1,obj);


         console.log(obj);
        }
      }
    ]
  });
  alert.present();
}
}
