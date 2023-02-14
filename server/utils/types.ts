import * as express from 'express';

/* eslint-disable @typescript-eslint/no-namespace */

export type reqType = express.Request;
export type resType = express.Response;
export type nextType = express.NextFunction;

declare global {
  namespace Express {
    interface Request {
      originalBody: any;
    }
  }
}
