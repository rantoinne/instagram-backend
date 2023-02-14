import { reqType, resType, nextType } from './types';

export default function asyncUtil(fn: (reqType: reqType, resType: resType, next: nextType) => any) {
  return function asyncUtilWrap(req: reqType, res: resType, next: nextType) {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}
