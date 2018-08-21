import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WordsProvider } from '../../providers/words/words';
import { CountdownPage } from '../countdown/countdown';

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _words:WordsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePage');
  }

  selectOpt(select){
    //this._words.setTime(min,seg);
    this._words.resetValues();
    this._words.setTimePlaySelect(select);
    this.comenzar();
  }

  comenzar(){
    this.navCtrl.push(CountdownPage);
  }

}
