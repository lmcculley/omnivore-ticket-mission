import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { Ticket } from '../models/ticket';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TicketService {
    private ticketsUrl = 'https://api.omnivore.io/1.0/locations/ibx4eb7T/tickets?where=eq(open,true)';
    private headers = new Headers({'Api-Key': 'e55d08bc7ba34a2bb15f51f14698615e'});
    private ticketDetail = new Subject<Ticket>();

    ticketDetail$ = this.ticketDetail.asObservable();

    constructor(private http: Http) { }

    setTicketDetail(ticket: Ticket) {
        this.ticketDetail.next(ticket);
     }

    getTickets(url?: string): Promise<any> {
        if(!url) url = this.ticketsUrl;
        return this.http
                   .get(url, { headers: this.headers })
                   .toPromise()
                   .then((response) => response.json())
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Oops, we got an error', error);
        return Promise.reject(error.message || error);
    }

}