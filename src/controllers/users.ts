import { Request, Response } from "express";
import { StatusCodes as STATUS_CODES } from "http-status-codes";

export const getAll = async (req: Request, res: Response) => {
  try {
    return res.status(STATUS_CODES.OK).send({ message: "Hello, World!" });
  } catch (error) {
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).send();
  }
};
