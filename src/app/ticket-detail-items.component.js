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
var TicketDetailItemsComponent = (function () {
    function TicketDetailItemsComponent(ticketService) {
        var _this = this;
        this.ticketService = ticketService;
        this.subscription = ticketService.ticketDetail$.subscribe(function (ticket) {
            _this.ticket = ticket;
        });
    }
    TicketDetailItemsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return TicketDetailItemsComponent;
}());
TicketDetailItemsComponent = __decorate([
    core_1.Component({
        selector: 'ticket-detail-items',
        templateUrl: './src/views/ticket-detail-items.html',
        styleUrls: ['./src/styles/ticket-detail.css']
    }),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketDetailItemsComponent);
exports.TicketDetailItemsComponent = TicketDetailItemsComponent;
//# sourceMappingURL=ticket-detail-items.component.js.map