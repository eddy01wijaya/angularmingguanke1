import { IAddress } from './i-address';

export interface ICustomer {
  id: string;
  name: string;
  email: string;
  address: IAddress;
  status: string; // Enumerated status options
}
