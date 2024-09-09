import { Request, Response, NextFunction } from "express";

export const ErrorMiddleWare = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    return res.status(500).send({ errors: err.message });
  }

  res.status(400).send({
    errors: [{ message: "Something went wrongs" }],
  });
  next();
};
