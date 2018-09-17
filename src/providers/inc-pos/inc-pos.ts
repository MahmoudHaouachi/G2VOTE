import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IncPosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IncPosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello IncPosProvider Provider');
  }
  incPosition(id){
  return this.http.post("http://localhost:3000/api/user/position",{
    'id':id
  });
}
}
