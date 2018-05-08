import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AskPage } from '../../pages/ask/ask';

@Injectable()
export class FlowTimerProvider {
  timer: any;

  constructor() {
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  public startTimer() {
    console.log('start');
    var timerFn = () => {
      // this.nav.push(AskPage);
      console.log('interval triggered');
      var interval = this.getRandomInt(1, 5) * 1000;
      this.timer = setTimeout(timerFn, interval);
    };

    timerFn();
  }

  public clearTimer() {
  	clearInterval(this.timer);
    console.log('stop');
  }
}

