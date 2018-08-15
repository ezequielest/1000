import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WordsProvider } from '../../providers/words/words';
import { PlayingPage } from '../playing/playing';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  correct;
  incorrect;
  listaIncorrectas;

  constructor(public navCtrl: NavController,
              public _words:WordsProvider) {

      this.correct = _words.getCorrect();
      this.incorrect = _words.getIncorrect();
      this.listaIncorrectas = _words.getResultIncorrectas();
  }

  volverAJugar(){
    this.navCtrl.push(PlayingPage)
    this._words.resetValues();
  }

}
