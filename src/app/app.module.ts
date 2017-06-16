import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { TicketOverviewComponent } from './ticket-overview.component';
import { TicketDetailComponent } from './ticket-detail.component';
import { TicketDetailItemsComponent } from './ticket-detail-items.component';
import { TicketDetailServicesComponent } from './ticket-detail-services.component';
import { TicketDetailVoidedComponent } from './ticket-detail-voided.component';
import { TicketDetailTotalsComponent } from './ticket-detail-totals.component';
import { TicketService } from './ticket.service';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule
  ],
  declarations: [ 
    TicketOverviewComponent,
    TicketDetailComponent,
    TicketDetailItemsComponent,
    TicketDetailServicesComponent,
    TicketDetailVoidedComponent,
    TicketDetailTotalsComponent
  ],
  providers: [ TicketService ],
  bootstrap: [ TicketOverviewComponent ]
})
export class AppModule { }
