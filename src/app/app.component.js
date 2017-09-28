"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppConfiguration_1 = require("./model/AppConfiguration");
var Player_1 = require("./model/Player");
var game_1 = require("./model/game");
var AppComponent = (function () {
    function AppComponent() {
        this.currentTurn = 1;
        this.config = null;
        this.currentDate = '';
        this.player = null;
        this.config = new AppConfiguration_1.AppConfiguration();
        this.currentDateTime = this.config.startDate.getTime();
        this.player = this.createPlayer();
        this.updateCurrentDate();
        this.gameModel = new game_1.GameModel();
    }
    AppComponent.prototype.createPlayer = function () {
        var player = new Player_1.Player('ToF');
        player.avatar = this.config.avatarsUrl + '/A02' + '.png';
        return player;
    };
    AppComponent.prototype.updateCurrentDate = function () {
        var tmp = new Date(this.currentDateTime);
        this.currentDate = tmp + '';
    };
    AppComponent.prototype.endTurn = function () {
        // Nouveau tour
        this.currentTurn++;
        this.currentDateTime += this.config.timeByTurn;
        this.updateCurrentDate();
    };
    AppComponent.prototype.openDialog = function (dialogId) {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map