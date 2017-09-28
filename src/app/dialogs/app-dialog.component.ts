import { Component } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './app-dialog.component.html',
    styleUrls: [ './app-dialog.component.css' ]
})
export class AppDialogComponent {
    title: string = 'DialogTitle';
    body: string = 'BODY';
    width: string = '600px';
    height: string = '300px';
    top: number = 30;
    left: number = 10;
}