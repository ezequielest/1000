import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlayingPage } from '../playing/playing';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  
  constructor(public navCtrl: NavController) {}

  comenzar(){
    this.navCtrl.push(PlayingPage);
  }

}


