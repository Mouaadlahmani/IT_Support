import {Role} from "../enums/role";

export class Admin {
  id!: number;
  fullName!: string;
  email!: string;
  password!: string;
  role!: Role;
}
