import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Ticket } from './ticket';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TicketService {
    private ticketsUrl = 'https://api.omnivore.io/1.0/locations/ibx4eb7T/tickets';
    private headers = new Headers({'Api-Key': 'e55d08bc7ba34a2bb15f51f14698615e'});

    constructor(private http: Http) {}

    getTickets(): Promise<Ticket[]> {
        return this.http
                   .get(this.ticketsUrl, { headers: this.headers })
                   .toPromise()
                   .then(function (response) { 
                       return response.json()._embedded.tickets as Ticket[]
                    })
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Oops, we got an error', error);
        return Promise.reject(error.message || error);
    }

}