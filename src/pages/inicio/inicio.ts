import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimePage } from '../time/time';
import { WordsProvider } from '../../providers/words/words';


@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  
  constructor(public navCtrl: NavController,
              public _words:WordsProvider) {}

  opcionJuego;
  minutos;

  selectGame(game){
    this._words.setGame(game);
    this.navCtrl.push(TimePage);
  }


}


