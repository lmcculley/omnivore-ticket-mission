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
var TicketOverviewComponent = (function () {
    function TicketOverviewComponent(ticketService) {
        this.ticketService = ticketService;
        this.isLoadingTickets = false;
        this.isLoadingTicket = false;
    }
    TicketOverviewComponent.prototype.getTickets = function (url) {
        var _this = this;
        this.isLoadingTickets = true;
        this.tickets = null;
        this.ticketService
            .getTickets(url)
            .then(function (tickets) {
            _this.isLoadingTickets = false;
            _this.links = tickets._links;
            return _this.tickets = tickets._embedded.tickets;
        });
    };
    TicketOverviewComponent.prototype.refreshTicketList = function () {
        this.clearSelectedTicket();
        this.tickets = null;
        this.links = null;
        this.getTickets();
    };
    TicketOverviewComponent.prototype.clearSelectedTicket = function () {
        this.selectedTicket = null;
        this.ticketService.setTicketDetail(this.selectedTicket);
    };
    TicketOverviewComponent.prototype.ngOnInit = function () {
        this.getTickets();
    };
    TicketOverviewComponent.prototype.onSelect = function (ticket) {
        var _this = this;
        this.isLoadingTicket = true;
        this.ticketService
            .getTickets(ticket._links.self.href)
            .then(function (ticket) {
            _this.isLoadingTicket = false;
            _this.selectedTicket = ticket;
            _this.ticketService.setTicketDetail(_this.selectedTicket);
        });
    };
    return TicketOverviewComponent;
}());
TicketOverviewComponent = __decorate([
    core_1.Component({
        selector: 'ticket-overview',
        templateUrl: './src/views/tickets-overview.html',
        styleUrls: ['./src/styles/tickets-overview.css'],
        providers: [ticket_service_1.TicketService]
    }),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketOverviewComponent);
exports.TicketOverviewComponent = TicketOverviewComponent;
//# sourceMappingURL=ticket-overview.component.js.map