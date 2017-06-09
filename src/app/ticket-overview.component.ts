import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';

@Component({
  selector: 'ticket-overview',
  templateUrl: './src/templates/tickets-overview.html',
  providers: [TicketService]
})

export class TicketOverviewComponent implements OnInit { 
  name = 'Omnivore'; 
  location = 'Open Tickets';
  tickets: Ticket[];
  selectedTicket: Ticket;

  constructor(private ticketService: TicketService) {}

  getTickets(): void {
    this.ticketService.getTickets().then(tickets => this.tickets = tickets.filter(t => t.open));
  }

  ngOnInit(): void {
    this.getTickets();
  }

  onSelect(ticket: Ticket): void {
    this.selectedTicket = ticket;
  }
}
