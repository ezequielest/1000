import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayingPage } from '../playing/playing';
/**
 * Generated class for the CountdownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-countdown',
  templateUrl: 'countdown.html',
})
export class CountdownPage {
  time = 3;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }
    
    this.time = 3;

    setInterval(() => {
        this.time -= 1;

        if (this.time == 0){
          navCtrl.push(PlayingPage);
        }
    }, 1000);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountdownPage');
  }

}
