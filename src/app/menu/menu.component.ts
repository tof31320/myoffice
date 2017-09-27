import { Component } from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: [ './menu.component.css' ]
})
export class MenuComponent {

    menuItems: Object[];
    itemSelected: number = -1;

    constructor(){
        this.menuItems = [{
            index: 0,
            label: 'ITEM 1'
        },
        {
            index: 1,
            label: 'ITEM 2'
        },
        {
            index: 2,
            label: 'ITEM 3'
        },
        {
            index: 3,
            label: 'ITEM 4'
        }];
    }

    selectMenuItem(index: number){
        this.itemSelected = index;
        console.log("select" + index);
    }
}