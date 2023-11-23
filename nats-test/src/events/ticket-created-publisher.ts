import {
  Publisher,
  type TicketCreatedEvent,
  Subjects,
} from "@sagewillcom/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
