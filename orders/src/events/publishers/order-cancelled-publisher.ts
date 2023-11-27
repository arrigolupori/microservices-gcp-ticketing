import { Publisher, OrderCancelledEvent, Subjects } from "@sagewillcom/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
