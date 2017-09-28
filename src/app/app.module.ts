import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PlayerComponent } from './player/player.component';
import { MenuComponent } from './menu/menu.component';
import { AppDialogComponent } from './dialogs/app-dialog.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PlayerComponent, MenuComponent, AppDialogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
