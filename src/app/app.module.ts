import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { TicketOverviewComponent } from './ticket-overview.component';
import { TicketDetailComponent } from './ticket-detail.component';
import { TicketService } from './ticket.service';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule
  ],
  declarations: [ 
    TicketOverviewComponent,
    TicketDetailComponent
  ],
  providers: [ TicketService ],
  bootstrap: [ TicketOverviewComponent ]
})
export class AppModule { }
