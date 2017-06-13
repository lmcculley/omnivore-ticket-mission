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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var TicketService = (function () {
    function TicketService(http) {
        this.http = http;
        this.ticketsUrl = 'https://api.omnivore.io/1.0/locations/ibx4eb7T/tickets?where=eq(open,true)';
        this.headers = new http_1.Headers({ 'Api-Key': 'e55d08bc7ba34a2bb15f51f14698615e' });
    }
    TicketService.prototype.getTickets = function (url) {
        if (!url)
            url = this.ticketsUrl;
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TicketService.prototype.handleError = function (error) {
        console.error('Oops, we got an error', error);
        return Promise.reject(error.message || error);
    };
    return TicketService;
}());
TicketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map