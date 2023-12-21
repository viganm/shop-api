import { Request } from "express";
export interface IGetUserAuthInfoRequest extends Request {
  user?: {
    username: string;
    person_id: string;
    role: string;
  };
}
