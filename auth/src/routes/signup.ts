import express, { type Request, type Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

const router = express.Router();

router.get("/api/users/signup", (req: Request, res: Response) => {
  res.send("User signup!");
});

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters."),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // in JS you'd do it like this
      // const error = new Error("Invalid email or password");
      // error.reasons = errors.array();

      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;

    console.log("Creating a user...");
    throw new DatabaseConnectionError();

    res.send({});
  }
);

export { router as signupRouter };
