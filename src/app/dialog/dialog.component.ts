import { Component } from '@angular/core';

@Component({
    selector: 'dialog',
    templateUrl: './dialog.component.html'
})
export class DialogComponent {
    title: string = 'Dialog';
    width: number = 600;
    height: number = 800;
    position: string = 'left';
    show: boolean = false;
}