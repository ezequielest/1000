import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimePage } from '../time/time';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  
  constructor(public navCtrl: NavController) {}

  opcionJuego;
  minutos;

  seleccionarTiempo(){
    this.navCtrl.push(TimePage);
  }


}


