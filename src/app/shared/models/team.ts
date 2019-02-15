import { Player } from "./player";
export interface Team {
  uuid: string;
  type: string;
  img?: string;
  thumbnail?: string;
  players?: Player[];
}
