import { Address } from './address.model';

export interface User {
  id?: string;
  name: string;
  profession: string;
  birthDate: string;
  documentNumber?: string | null;
  email: string;
  password: string;
  phone: string;
  address: Address;
}
