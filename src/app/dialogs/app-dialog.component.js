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
var game_1 = require("../model/game");
var AppDialogComponent = (function () {
    function AppDialogComponent() {
        this.id = '0';
        this.title = 'DialogTitle';
        this.body = 'BODY';
        this.width = '600px';
        this.height = '300px';
        this.top = 30;
        this.left = 10;
        this.show = false;
    }
    return AppDialogComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppDialogComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", game_1.GameModel)
], AppDialogComponent.prototype, "gameModel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppDialogComponent.prototype, "title", void 0);
AppDialogComponent = __decorate([
    core_1.Component({
        selector: 'app-dialog',
        templateUrl: './app-dialog.component.html',
        styleUrls: ['./app-dialog.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppDialogComponent);
exports.AppDialogComponent = AppDialogComponent;
//# sourceMappingURL=app-dialog.component.js.map