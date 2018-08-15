import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WordsProvider } from '../../providers/words/words';
import { ResultsPage } from '../results/results';

@Component({
  selector: 'page-playing',
  templateUrl: 'playing.html',
})
export class PlayingPage {

  words = [];
  word;
  valueDefault = "";
  minutes = 0;
  seconds = 15;
  corriendo = true;
  listCorrect = [];
  listIncorrect = [];
  pista = "";

  constructor(public navCtrl: NavController,
              public _words:WordsProvider) {

      this.iniciarCount();
      this.words= this._words.getWords();
      this.getRandom();
      //this.generateClue();
  }

  iniciarCount(){
    this.corriendo = true;
    this.seconds = 15;

    let refresh = setInterval(() => {

      if (this.seconds == 0){

        if (this.minutes > 0){
          this.minutes --;
          this.seconds = 59;
        }else{
          this.corriendo = false;
          clearInterval(refresh);
          this._words.setListResult(this.listIncorrect, this.listCorrect);
          this.navCtrl.push(ResultsPage); //resultado final
        }

      }else{
        this.seconds --;
      }

    },1000)

  }

  getRandom(){
    this.valueDefault = " ";
    let number = Math.floor((Math.random() * this.words.length) + 0);
    this.word = this.words[number];
    this.words.splice(number,1);
  }

  getResult(value){

    if (this.word.es.length > 1){
      this.word.es.forEach(element => {
          if (element == value){
            this._words.addCorrect();
            this.listCorrect.push({'originalEs': this.word.es, 'originalEn': this.word.en, 'ingresado': value})
          }
      });

    }else if (value.trim() == this.word.es[0]){
      this._words.addCorrect();
      this.listCorrect.push({'originalEs': this.word.es, 'originalEn': this.word.en, 'ingresado': value})
    }else{

      this.listIncorrect.push({'originalEs': this.word.es, 'originalEn': this.word.en, 'ingresado': value})

      this._words.addIncorrect();
    }


    this.getRandom();
    //this.generateClue();
  }

  resetGame(){
    this._words.resetValues();
    this.iniciarCount();
  }


  generateClue(){

    let row:string = "";
    let firstLetter = this.word.es[0];
    for (let index = 0; index < this.word.es.length -1; index++) {
      row += "_ ";
    }

    this.pista = '<h3>'+ firstLetter + ' ' + row + '</h3>';
  }

}
