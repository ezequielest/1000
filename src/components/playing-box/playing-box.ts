import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the PlayingBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'playing-box',
  templateUrl: 'playing-box.html'
})
export class PlayingBoxComponent {

  text: string;
  defaultValue = "";

  @Input() word;
  @Output() result = new EventEmitter();

  constructor() {}

  verificResult(val){
    console.log(this.word)
    console.log(val);
    this.result.emit(val);
    this.defaultValue = "";
  }

}
