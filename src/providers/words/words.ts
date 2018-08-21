//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../../models/words.model';


@Injectable()
export class WordsProvider {

  words;
  incorrect:number = 0;
  correct:number = 0;
  incorrectList = [];
  correctList = [];
  data = new Data();
  min;
  seg;

  record;
  newRecord = false;
  timePlaySelect = 0;

  constructor() {
    this.verificarRecord();
    this.words = this.data.leerArchivo();
    
  }

  getWords(){
    return this.words;
  }

  addIncorrect(){
    this.incorrect++;
  }

  addCorrect(){
    this.correct++;
  }

  resetValues(){
    this.correct = 0;
    this.incorrect = 0;
    this.words = this.data.leerArchivo();
  }

  getCorrect(){
    return this.correct;
  }

  getIncorrect(){
    return this.incorrect;
  }

  setListResult(inc,corr){
    this.incorrectList = inc;
    this.correctList = corr;
  }

  getResultCorrectas(){
    return this.correctList;
  }

  getResultIncorrectas(){
    return this.incorrectList;
  }


  verificarRecord(){
    let record = localStorage.getItem('record');

    if (record === null){

        let Orecord = {
            '1': 0, 
            '2': 0, 
            '3': 0
        };

        this.record = Orecord;

        let Srecord = JSON.stringify(Orecord);

        localStorage.setItem('record', Srecord);

    }else{

      this.record = JSON.parse(record);

    }
  }

  getRecord(){
      return this.record[this.timePlaySelect];
  }

  setTimePlaySelect(timePlaySelect){

    this.timePlaySelect = timePlaySelect; 

    switch (timePlaySelect) {
      case 1:
        this.min=0;
        this.seg=30;
        break;
      case 2:
        this.min=1;
        this.seg=0;
        break;
      case 3:
        this.min=3;
        this.seg=0;
        break;
      default:
        break;
    }

  }

  setRecord(record){
    this.record[this.timePlaySelect] = record;

    localStorage.setItem('record', JSON.stringify(this.record));
  }

  setTime(min,seg){
    this.min = min;
    this.seg = seg;
  }

  getMinutesSeconds(){
    let time = [this.min, this.seg];

    return time;
  }

}
