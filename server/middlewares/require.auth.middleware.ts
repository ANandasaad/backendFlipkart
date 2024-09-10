import { NextFunction, Request, Response } from "express";
import { NotAcceptable } from "http-errors";
export const requiredAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) throw new NotAcceptable("You must be logged in");
  next();
};
