import { Component, Input } from '@angular/core';
import { Ticket } from './ticket';

@Component({
    selector: 'ticket-detail',
    templateUrl: './src/templates/ticket-detail.html'
})

export class TicketDetailComponent {
    @Input() ticket: Ticket;
}