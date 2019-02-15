import { Team } from "./team";
export interface University {
  uuid: string;
  name: string;
  address?: string;
  img?: string;
  thumbnail?: string;
  createdId?: string;
  teams?: Team[];
  isProduction: boolean;
}
