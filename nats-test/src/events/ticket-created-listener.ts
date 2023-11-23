import { Listener } from "./base-listener";
import { type Message } from "node-nats-streaming";
import { type TicketCreatedEvent } from "./ticket-created-event";
import { Subjects } from "./subjects";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = "payments-service";

  onMessage(data: any, msg: Message) {
    console.log("Event data:", data);

    msg.ack();
  }
}
