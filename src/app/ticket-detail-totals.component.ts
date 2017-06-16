import { Component, OnDestroy } from '@angular/core';
import { TicketService } from './ticket.service';
import { Subscription } from 'rxjs/Subscription';
import { Ticket } from '../models/ticket';

@Component({
    selector: 'ticket-detail-totals',
    templateUrl: './src/views/ticket-detail-totals.html',
    styleUrls: ['./src/styles/ticket-detail.css']
})

export class TicketDetailTotalsComponent implements OnDestroy {
    ticket: Ticket;
    subscription: Subscription;

    constructor(private ticketService: TicketService) {
        this.subscription = ticketService.ticketDetail$.subscribe(ticket => {
            this.ticket = ticket;
        });
    }

    hasTotals(totals: any): boolean {
        let hasTotal = false;
        for(let key in totals)
            if(totals.hasOwnProperty(key) && totals[key] > 0) hasTotal = true;
        return hasTotal;   
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}