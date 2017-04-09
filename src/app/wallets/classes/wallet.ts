import { Emitent } from "./emitent";

export class Wallet {
  serial: string;
  name: string;
  amount: number;
  emitent: Emitent;
  active: boolean;
}