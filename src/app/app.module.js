"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var ticket_overview_component_1 = require("./ticket-overview.component");
var ticket_detail_component_1 = require("./ticket-detail.component");
var ticket_detail_items_component_1 = require("./ticket-detail-items.component");
var ticket_detail_services_component_1 = require("./ticket-detail-services.component");
var ticket_detail_voided_component_1 = require("./ticket-detail-voided.component");
var ticket_detail_totals_component_1 = require("./ticket-detail-totals.component");
var ticket_service_1 = require("./ticket.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule
        ],
        declarations: [
            ticket_overview_component_1.TicketOverviewComponent,
            ticket_detail_component_1.TicketDetailComponent,
            ticket_detail_items_component_1.TicketDetailItemsComponent,
            ticket_detail_services_component_1.TicketDetailServicesComponent,
            ticket_detail_voided_component_1.TicketDetailVoidedComponent,
            ticket_detail_totals_component_1.TicketDetailTotalsComponent
        ],
        providers: [ticket_service_1.TicketService],
        bootstrap: [ticket_overview_component_1.TicketOverviewComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map