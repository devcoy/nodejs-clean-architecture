import { Request, Response, NextFunction } from "express";

import httpStatus from "../../common/http-status";
import {
  ExceptionResponse,
  Status,
  ResponseBase,
  Message,
} from "../../common/http.interface";

export const resourceNotFoundMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const respBase: ResponseBase = httpStatus.build(Status.NOT_FOUND);
  const exception: ExceptionResponse = {
    ...respBase,
    title: "Resource not found",
    type: "Resource",
    code: 20,
    detail: Message.RESOURCE_NOT_FOUND,
  };
  response.status(404).json(exception);
};
