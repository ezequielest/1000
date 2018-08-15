//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Words,Data } from '../../models/words.model';
import { HttpModule } from "@angular/http";

@Injectable()
export class WordsProvider {

  words;
  incorrect:number = 0;
  correct:number = 0;
  incorrectList = [];
  correctList = [];
  data = new Data();

  record;
  currentRecord;
  newRecord = false;

  constructor(private _http:HttpModule) {
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

  getRecord(){
    let record = localStorage.getItem('record');
    console.log(record)
    if (record === null){
      return this.currentRecord = 0;
    }else{
      return this.currentRecord = record;
    }

  }

  setRecord(record){
    localStorage.setItem('record', record);
  }

}
