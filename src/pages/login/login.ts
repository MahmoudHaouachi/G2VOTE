import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginProvider} from '../../providers/login/login'
import { Storage } from '@ionic/storage';
import {VotePage} from '../vote/vote';
import {PosteListPage} from '../poste-list/poste-list'

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
private username;
private password ;
private votePage;
private resPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public login: LoginProvider, private storage: Storage) {
    this.votePage = VotePage
    this.resPage = PosteListPage

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
logger(){
  if(this.username && this.password){
  this.login.login(this.username,this.password).subscribe(user=>{
    console.log('user', user);
    console.log('id',user['result'][0]['position']);
    //
    if(user['result'][0]['position'] > 9)
    {
      this.navCtrl.push(this.resPage);
    } else {
    this.storage.set('userID',user['result'][0]['id']);
    this.storage.set('userPOS',user['result'][0]['position']);
    this.navCtrl.push(this.votePage);
  }
});
}else{ alert('verify your enterings');}
}
}
