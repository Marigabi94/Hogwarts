import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root',
})
export class CasasService {
  constructor(private http: HttpClient) {}

  // getCasas(): Observable<any> {
  //   return (
  //     this.http

  //       .get('http://hp-api.herokuapp.com/api/characters/house/ravenclaw')
  //   );
  // }
}
