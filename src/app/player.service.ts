import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';

@Injectable()
export class PlayerService {
  private apiUrl = 'http://localhost:3000/notes/';
  private id: string = '5';
  private user = {
    _id: '',
    title: '',
    text: ''
  };

  constructor(private http: Http) {}

  addPlayer(username: string, password: string): Observable<> {

    return this.http.post(this.apiUrl, body,{
      params: new HttpParams().set('id', '6'),
    }).subscribe();

  }

}
