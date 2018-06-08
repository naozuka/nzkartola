import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;  
  pontuados: any;

  constructor(public navCtrl: NavController,
              public restProvider: RestProvider) {
    this.getPontuados();
  }

  getUsers() {    
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  getPontuados() {    
    this.restProvider.getPontuados()
    .then(data => {      
      this.pontuados = data;      
      console.log(this.pontuados);
    });
  }

}
