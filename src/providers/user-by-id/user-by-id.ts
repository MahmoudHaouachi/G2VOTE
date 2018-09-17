import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserByIdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserByIdProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserByIdProvider Provider');
  }
getUserById(id){
  return this.http.post('http://localhost:3000/api/user/',{
    'id':id
  })
}
}
