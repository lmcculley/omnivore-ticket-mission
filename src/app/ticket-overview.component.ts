import { Component, OnInit } from '@angular/core';

import { Ticket } from './ticket';
import { Links } from './links';
import { TicketService } from './ticket.service';

@Component({
  selector: 'ticket-overview',
  templateUrl: './src/views/tickets-overview.html',
  styleUrls: ['./src/styles/tickets-overview.css'],
  providers: [TicketService]
})

export class TicketOverviewComponent implements OnInit { 
  isLoading = false;
  tickets: Ticket[];
  links: Links;
  selectedTicket: Ticket;

  constructor(private ticketService: TicketService) {}

  getTickets(url?: string): void {
    this.isLoading = true;
    this.tickets = null;
    this.ticketService
        .getTickets(url)
        .then(tickets => {
          this.isLoading = false;
          this.links = tickets._links;
          return this.tickets = tickets._embedded.tickets;
        });
  }
  
  refreshTicketList(): void {
    this.clearSelectedTicket();
    this.tickets = null;
    this.links = null;
    this.getTickets();
  }

  clearSelectedTicket(): void {
    this.selectedTicket = null;
  }

  ngOnInit(): void {
    this.getTickets();
  }

  onSelect(ticket: Ticket): void {
    this.selectedTicket = ticket;
  }
}
