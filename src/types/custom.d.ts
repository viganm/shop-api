import { Request } from "express";
export interface IGetUserAuthInfoRequest extends Request {
  user?: {
    username: string;
    id: number;
    role: string;
  }; // or any other type
}
