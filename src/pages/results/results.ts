import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WordsProvider } from '../../providers/words/words';
import { CountdownPage } from '../countdown/countdown';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  correct;
  incorrect;
  incorrectList;
  correctList;
  points = 0;
  currentRecord;
  newRecord = false; 

  constructor(public navCtrl: NavController,
              public _words:WordsProvider) {

      let elements = document.querySelectorAll(".tabbar");

      if (elements != null) {
          Object.keys(elements).forEach(element => {
              elements[element].style.display = 'flex';
          });
      }

      this.correct = _words.getCorrect();
      this.incorrect = _words.getIncorrect();
      this.incorrectList = _words.getResultIncorrectas();
      this.correctList = _words.getResultCorrectas();
      this.currentRecord = _words.getRecord();
      this.calcularPuntos();
      this.verificarNewRecord();
  }

  volverAJugar(){
    this.navCtrl.push(CountdownPage)
    this._words.resetValues();
  }

  calcularPuntos(){
    let puntos = this.correct * 100;
    puntos = puntos - (this.incorrect * 25)
    this.points = puntos;
  }

  verificarNewRecord(){

    if (this.points > this.currentRecord){
      this.newRecord = true;
      this.currentRecord = this.points
      this._words.setRecord(this.points);
    }
    
  }



}