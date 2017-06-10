import { Component, Input } from '@angular/core';
import { Ticket } from './ticket';

@Component({
    selector: 'ticket-detail',
    templateUrl: './src/views/ticket-detail.html',
    styleUrls: ['./src/styles/ticket-detail.css']
})

export class TicketDetailComponent {
    @Input() ticket: Ticket;

    hasTotals(totals: any): boolean {
        var hasTotal = false;
        for(var key in totals)
            if(totals.hasOwnProperty(key) && totals[key] > 0) hasTotal = true;
        return hasTotal;   
    }
}