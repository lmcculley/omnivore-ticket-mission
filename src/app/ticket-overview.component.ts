import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';

@Component({
  selector: 'ticket-overview',
  templateUrl: './src/views/tickets-overview.html',
  styleUrls: ['./src/styles/tickets-overview.css'],
  providers: [TicketService]
})

export class TicketOverviewComponent implements OnInit { 
  private timer: any;
  isLoading = false;
  tickets: Ticket[];
  selectedTicket: Ticket;

  constructor(private ticketService: TicketService) {}

  getTickets(): void {
    this.isLoading = true;
    this.ticketService
        .getTickets()
        .then(tickets => {
          this.isLoading = false;
          return this.tickets = tickets;
        });
  }
  
  refreshTicketList(): void {
    this.clearSelectedTicket();
    this.tickets = [];
    this.getTickets();
  }

  clearSelectedTicket(): void {
    this.selectedTicket = null;
  }

  ngOnInit(): void {
    this.getTickets();
    //this.timer = setInterval(() => {this.getTickets()}, 45000);
  }

  onSelect(ticket: Ticket): void {
    this.selectedTicket = ticket;
  }
}
