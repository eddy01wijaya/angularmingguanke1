import { ICompany } from './i-company';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: ICompany;
}
