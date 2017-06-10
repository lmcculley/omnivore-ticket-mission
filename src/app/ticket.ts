export class Ticket {
  "void": boolean;
  totals: {
    total: number;
    tips: number;
    tax: number;
    sub_total: number;
    service_charges: number;
    paid: number;
    other_charges: number;
    items: number;
    due: number;
    discounts: number;
  };
  ticket_number: number;
  opened_at: number;
  open: boolean;
  name: string;
  id: string;
  guest_count: number;
  closed_at: number;
  auto_send: boolean;
}