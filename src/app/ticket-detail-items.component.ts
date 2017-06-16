import { Component, OnDestroy } from '@angular/core';
import { TicketService } from './ticket.service';
import { Subscription } from 'rxjs/Subscription';
import { Ticket } from '../models/ticket';

@Component({
    selector: 'ticket-detail-items',
    templateUrl: './src/views/ticket-detail-items.html',
    styleUrls: ['./src/styles/ticket-detail.css']
})

export class TicketDetailItemsComponent implements OnDestroy {
    ticket: Ticket;
    subscription: Subscription;

    constructor(private ticketService: TicketService) {
        this.subscription = ticketService.ticketDetail$.subscribe(ticket => {
            this.ticket = ticket;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}