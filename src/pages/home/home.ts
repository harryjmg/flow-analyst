import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlowTimerProvider } from '../../providers/flow-timer/flow-timer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public stateLabel: string;
  public stateImage: string;

  constructor(public navCtrl: NavController, private timer: FlowTimerProvider) {

  }

  ngOnInit() {
  	this.stateLabel = "en sommeil";
  	this.stateImage = "assets/imgs/moon.png";
  }

  changeText(event) {
  	if (event.checked) {
  		this.stateLabel = "en cours";
  		this.stateImage = "assets/imgs/sun.png";
      this.timer.startTimer();
  	} else {
  		this.stateLabel = "en sommeil";
  		this.stateImage = "assets/imgs/moon.png";
      this.timer.clearTimer();
  	}
  }

}
