import { Component } from '@angular/core';
import {AppConfiguration } from './model/AppConfiguration';
import { Player } from './model/Player';
import { GameModel } from './model/game';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  gameModel: GameModel;
  currentTurn: number = 1;
  config: AppConfiguration = null;
  currentDateTime: number;
  currentDate: string = '';
  player: Player = null;  

  constructor(){    

      this.config = new AppConfiguration();
      this.currentDateTime = this.config.startDate.getTime();

      this.player = this.createPlayer();

      this.updateCurrentDate();

      this.gameModel = new GameModel();
  }

  createPlayer(){
      let player = new Player('ToF');
      
      player.avatar = this.config.avatarsUrl + '/A02' + '.png';

      return player;
  }

  updateCurrentDate(){
      let tmp = new Date(this.currentDateTime);
      this.currentDate = tmp + '';
  }

  endTurn(): void {
      // Nouveau tour
      this.currentTurn++;
      this.currentDateTime += this.config.timeByTurn;

      this.updateCurrentDate();
  }

  openDialog(dialogId: string){

  }
}
