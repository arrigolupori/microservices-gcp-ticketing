import { type ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    // making a superset
    super();

    // only because we're extending built-in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
