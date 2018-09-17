import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CandidatByPostProvider} from '../../providers/candidat-by-post/candidat-by-post'
import {VoteProvider} from '../../providers/vote/vote'
import {IncPosProvider} from '../../providers/inc-pos/inc-pos'
import { Storage } from '@ionic/storage';
import {LoginPage} from '../login/login'

/**
 * Generated class for the VotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vote',
  templateUrl: 'vote.html',
})
export class VotePage {
private posts = ['SG','SGA','RH','event','comm','projet','sponsoring','dev','sec','embarque'];
private real=['Secrétaire général','Secrétaire général adjoint', 'Responsable ressources humaines','Responsable evenementiel','Responsable communication',
'Responsable projet','Chef atelier développement','Chef atelier sécurité informatique', 'Chef atelier embarqué']
private p;
private cand = new Array();
private loginPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public candidatByPost: CandidatByPostProvider, public voteForCand: VoteProvider, public storage: Storage, public incPos: IncPosProvider) {

this.loginPage = LoginPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotePage');
    this.getCand();

  }
getCand(){

  this.storage.get('userPOS').then((val)=>{
    this.p =val;
  this.candidatByPost.getCandidatByPost(this.posts[val]).subscribe(candidat => {
  console.log('candidat', candidat);
  this.cand = candidat['result'];
  console.log(this.cand);
});
});
}
  vote(id){
    this.voteForCand.voteForCand(id).subscribe(cand =>{
      this.storage.get('userID').then((val)=>{
        this.incPos.incPosition(val).subscribe(user =>{});
        this.getCand();
          this.storage.get('userPOS').then((pos)=>{

            this.storage.set('userPOS',pos+1);

        });
      });

    });
  }

logout(){
  this.storage.clear();
  this.navCtrl.push(this.loginPage);
}
}
