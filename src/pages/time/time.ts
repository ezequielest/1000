import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayingPage } from '../playing/playing';
import { WordsProvider } from '../../providers/words/words';

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

  setTime(min,seg){
    this._words.setTime(min,seg);
    this.comenzar();
  }

  comenzar(){
    this.navCtrl.push(PlayingPage);
  }

}
