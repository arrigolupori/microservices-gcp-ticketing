import { type Message } from "node-nats-streaming";
import {
  Listener,
  type TicketCreatedEvent,
  Subjects,
} from "@sagewillcom/common";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = "payments-service";

  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    console.log("Event data:", data);

    msg.ack();
  }
}
