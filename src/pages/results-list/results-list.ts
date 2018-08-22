import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WordsProvider } from '../../providers/words/words';

/**
 * Generated class for the ResultsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results-list',
  templateUrl: 'results-list.html',
})
export class ResultsListPage {

  wordsList = [];
  tipoList = "";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _words:WordsProvider) {
    
    this.wordsList =  this.navParams.get('list');
    this.tipoList =  this.navParams.get('tipoList');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsListPage');
  }

}
