import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CandidatByPostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CandidatByPostProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CandidatByPostProvider Provider');
  }
getCandidatByPost(post){
  return this.http.post('http://localhost:3000/api/candidat/post',
  {'post':post});

}
}
