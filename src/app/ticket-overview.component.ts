import { Component, OnInit } from '@angular/core';

import { Ticket } from '../models/ticket';
import { Links } from '../models/links';
import { TicketService } from './ticket.service';

@Component({
  selector: 'ticket-overview',
  templateUrl: './src/views/tickets-overview.html',
  styleUrls: ['./src/styles/tickets-overview.css'],
  providers: [TicketService]
})

export class TicketOverviewComponent implements OnInit { 
  isLoadingTickets = false;
  isLoadingTicket = false;
  tickets: Ticket[];
  links: Links;
  selectedTicket: Ticket;

  constructor(private ticketService: TicketService) {}

  getTickets(url?: string): void {
    this.isLoadingTickets = true;
    this.tickets = null;
    this.ticketService
        .getTickets(url)
        .then(tickets => {
          this.isLoadingTickets = false;
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
    this.ticketService.setTicketDetail(this.selectedTicket);  
  }

  ngOnInit(): void {
    this.getTickets();
  }

  onSelect(ticket: Ticket): void {
    this.isLoadingTicket = true;
    this.ticketService
        .getTickets(ticket._links.self.href)
        .then(ticket => {
          this.isLoadingTicket = false;
          this.selectedTicket = ticket;    
          this.ticketService.setTicketDetail(this.selectedTicket);      
        });
  }
}
