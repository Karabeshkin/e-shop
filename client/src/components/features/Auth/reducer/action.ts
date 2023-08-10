import { Message } from "../../Questions/type";
import { User } from "../type";

export type Action =
  // { type:'auth/reg', payload:User }
  | { type: "auth/registration"; payload: User | Message }
  // | { type: 'auth/verification'; payload: User };
  | { type: "auth/verification"; payload: User | Message }
  | { type: "auth/authorization"; payload: User | Message }
  | { type: "user/score"; payload: { score: number } };
