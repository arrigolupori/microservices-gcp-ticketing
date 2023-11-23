import { Publisher, Subjects, type TicketCreatedEvent } from "@sagewillcom/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
