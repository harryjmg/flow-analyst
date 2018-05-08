import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public stateLabel: string;
  public stateImage: string;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
  	this.stateLabel = "en sommeil";
  	this.stateImage = "assets/imgs/moon.png";
  }

  changeText(event) {
  	console.log(event);
  	if (event.checked) {
  		this.stateLabel = "en cours";
  		this.stateImage = "assets/imgs/sun.png";
  	} else {
  		this.stateLabel = "en sommeil";
  		this.stateImage = "assets/imgs/moon.png";
  	}
  }

}
