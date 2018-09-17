import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CandidatByPostProvider} from '../../providers/candidat-by-post/candidat-by-post'

/**
 * Generated class for the ResultatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultat',
  templateUrl: 'resultat.html',
})
export class ResultatPage {
  private posts = ['SG','SGA','RH','event','comm','projet','sponsoring','dev','sec','embarque'];
  private real=['Secrétaire général','Secrétaire général adjoint', 'Responsable ressources humaines','Responsable evenementiel','Responsable communication',
  'Responsable projet','Responsable sponsoring','Chef atelier développement','Chef atelier sécurité informatique', 'Chef atelier embarqué']
  private p;
  private res=[];
  private poste;

  constructor(public navCtrl: NavController, public navParams: NavParams, public candidatByPost: CandidatByPostProvider) {
    this.poste=navParams.data.post;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultatPage');
    this.getCand();
  }

  getCand(){

    this.candidatByPost.getCandidatByPost(this.poste).subscribe(candidat => {
    console.log('candidat', candidat);
    //console.log(this.cand);
    for(var i=0; i<candidat['result'].length; i++){
    this.res[i]={first_name:candidat['result'][i]['first_name'], last_name:candidat['result'][i]['last_name'], pourcentage:((Number(candidat['result'][i]['vote'])*100)/Number(this.voteSum(candidat['result'])))}
  }
  });
    }
voteSum(tab){
  var s=0;
  for(var i=0; i<tab.length; i++){
    s=s+Number(tab[i].vote);
  }
  console.log(s);
  return s;
}

}
