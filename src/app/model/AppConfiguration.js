"use strict";
var AppConfiguration = (function () {
    function AppConfiguration() {
        this.startDate = new Date('January 1, 2000 09:00:00');
        this.timeByTurn = 1000 * 60 * 60 * 24; // 24h par tour
        this.avatarsUrl = 'assets/img/avatars/';
    }
    return AppConfiguration;
}());
exports.AppConfiguration = AppConfiguration;
//# sourceMappingURL=AppConfiguration.js.map