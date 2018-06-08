import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//apiUrl = 'https://api.cartolafc.globo.com/atletas/pontuados';

@Injectable()
export class RestProvider {

  apiUrl = 'https://jsonplaceholder.typicode.com';
  redditUrl = "https://www.reddit.com/new.json";
  urlpontuados = "https://api.cartolafc.globo.com/atletas/pontuados";
  public feeds: Array<string>;
  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  public getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getPontuados() {
    return new Promise(resolve => {
      this.http.get(this.urlpontuados).subscribe(data => {
        console.log("AQUI");
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // public getFeeds() {
  //   this.http.get(this.redditUrl).map(res => res.json())
  //     .subscribe(data => {
  //       this.feeds = data.data.children;
  //     });
  // }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
