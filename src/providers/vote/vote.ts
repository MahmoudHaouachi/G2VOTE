import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VoteProvider {

  constructor(public http: HttpClient) {
    console.log('Hello VoteProvider Provider');
  }
  voteForCand(id){
  return this.http.post('http://localhost:3000/api/candidat/vote',
  {'id':id});
}
}
