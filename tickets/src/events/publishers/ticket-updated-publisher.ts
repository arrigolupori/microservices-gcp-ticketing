import {
  Publisher,
  Subjects,
  type TicketUpdatedEvent,
} from "@sagewillcom/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
