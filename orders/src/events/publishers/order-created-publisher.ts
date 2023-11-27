import { Publisher, OrderCreatedEvent, Subjects } from "@sagewillcom/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
