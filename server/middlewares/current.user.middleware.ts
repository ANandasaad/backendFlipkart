import { NextFunction, Request, Response } from "express";
import { BadRequest } from "http-errors";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}
export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    throw new BadRequest("Invalid credentials. User is not logged in.");
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;

    req.currentUser = payload; // Attach the payload to the request object
  } catch (error) {
    console.error("JWT verification failed:", error);
  }

  next(); // Continue to the next middleware or route handler
};
