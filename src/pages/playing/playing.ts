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
  corriendo = true;
  listCorrect = [];
  listIncorrect = [];
  pista = "";
  seconds = 0;
  minutes = 0;
  refresh;

  constructor(public navCtrl: NavController,
              public _words:WordsProvider) {
      
      this.setTime();
      this.iniciarCount();
      this.words= this._words.getWords();
      this.getRandom();
      //this.generateClue();
  }

  iniciarCount(){
    this.corriendo = true;

    this.refresh = setInterval(() => {

      if (this.seconds == 0){

        if (this.minutes > 0){
          this.minutes --;
          this.seconds = 59;
        }else{
          this.corriendo = false;
          clearInterval(this.refresh);
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

  verificResult(value:string){

    value = this.cleanAcentsString(value).toLocaleLowerCase();

    if (this.word.es.length > 1){

      this.word.es.forEach(element => {

          if (element.toLocaleLowerCase() == value){
            this._words.addCorrect();
            this.listCorrect.push({'originalEs': this.word.es.toLocaleLowerCase(), 'originalEn': this.word.en.toLocaleLowerCase(), 'ingresado': value})
          }
          
      });

    }else if ( value.trim() == this.cleanAcentsString(this.word.es[0]).toLocaleLowerCase() ){
      this._words.addCorrect();
      this.listCorrect.push({'originalEs': this.word.es, 'originalEn': this.word.en, 'ingresado': value})
    }else{
      this._words.addIncorrect();
      this.listIncorrect.push({'originalEs': this.word.es, 'originalEn': this.word.en, 'ingresado': value})
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

  setTime(){
    let time = this._words.getMinutesSeconds();
    this.minutes = time[0];
    this.seconds = time[1];
  }

  terminar(){
    this.corriendo = false;
    clearInterval(this.refresh);
    this._words.setListResult(this.listIncorrect, this.listCorrect);
    this.navCtrl.push(ResultsPage); //resultado final
  }

  cleanAcentsString(cadena){
    cadena = cadena
                .replace(/á/gi,"a")
                .replace(/é/gi,"e")
                .replace(/í/gi,"i")
                .replace(/ó/gi,"o")
                .replace(/ú/gi,"u");

    return cadena
  }

}
