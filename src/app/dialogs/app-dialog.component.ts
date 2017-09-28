import { Component, Input } from '@angular/core';
import { GameModel } from '../model/game';

@Component({
    selector: 'app-dialog',
    templateUrl: './app-dialog.component.html',
    styleUrls: [ './app-dialog.component.css' ]
})
export class AppDialogComponent {

    @Input() id: string = '0';

    @Input() gameModel: GameModel;

    @Input() title: string = 'DialogTitle';
    body: string = 'BODY';
    width: string = '600px';
    height: string = '300px';
    top: number = 30;
    left: number = 10;
    show: boolean = false;

    constructor(){    
    }
}