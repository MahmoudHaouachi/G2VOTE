import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultatPage} from '../resultat/resultat';
/**
 * Generated class for the PosteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poste-list',
  templateUrl: 'poste-list.html',
})
export class PosteListPage {
  private posts = ['SG','SGA','RH','event','comm','projet','sponsoring','dev','sec','embarque'];
  private real=['Secrétaire général','Secrétaire général adjoint', 'Responsable ressources humaines','Responsable evenementiel','Responsable communication',
  'Responsable projet','Chef atelier développement','Chef atelier sécurité informatique', 'Chef atelier embarqué']
  private resPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resPage= ResultatPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PosteListPage');
  }

goTo(post){
  this.navCtrl.push(this.resPage , {post:post});
}

}
