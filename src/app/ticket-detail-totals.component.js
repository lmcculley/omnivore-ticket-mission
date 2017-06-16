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
var ticket_service_1 = require("./ticket.service");
var TicketDetailTotalsComponent = (function () {
    function TicketDetailTotalsComponent(ticketService) {
        var _this = this;
        this.ticketService = ticketService;
        this.subscription = ticketService.ticketDetail$.subscribe(function (ticket) {
            _this.ticket = ticket;
        });
    }
    TicketDetailTotalsComponent.prototype.hasTotals = function (totals) {
        var hasTotal = false;
        for (var key in totals)
            if (totals.hasOwnProperty(key) && totals[key] > 0)
                hasTotal = true;
        return hasTotal;
    };
    TicketDetailTotalsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return TicketDetailTotalsComponent;
}());
TicketDetailTotalsComponent = __decorate([
    core_1.Component({
        selector: 'ticket-detail-totals',
        templateUrl: './src/views/ticket-detail-totals.html',
        styleUrls: ['./src/styles/ticket-detail.css']
    }),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketDetailTotalsComponent);
exports.TicketDetailTotalsComponent = TicketDetailTotalsComponent;
//# sourceMappingURL=ticket-detail-totals.component.js.map