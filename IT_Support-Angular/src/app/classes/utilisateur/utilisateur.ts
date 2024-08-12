import {Role} from "../enums/role";

export class Utilisateur {
  id!: number;
  fullName!: string;
  email!: string;
  password!: string;
  role!: Role;
}
