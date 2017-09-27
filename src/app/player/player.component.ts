import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';

@Component({
    selector: 'player',
    templateUrl: './player.component.html',
    styleUrls: [ './player.component.css' ]
})
export class PlayerComponent {

    @Input() player: Player = null;
}