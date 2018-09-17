import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VotePage} from '../vote/vote'
import {LoginPage} from '../login/login'
import {PosteListPage} from '../poste-list/poste-list'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
private votePage;
private loginPage;
private resPage;
  constructor(public navCtrl: NavController) {
 this.votePage = VotePage
 this.loginPage = LoginPage
 this.resPage = PosteListPage
  }

  goToVotePage() {

      this.navCtrl.push(this.loginPage);}
goToResultPage(){
  this.navCtrl.push(this.resPage);
}

}
