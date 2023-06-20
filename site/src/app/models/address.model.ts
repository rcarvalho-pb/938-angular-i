export interface Address {
  street: string;
  number?: number | string;
  complement?: string;
  state: string;
  city: string;
  neighborhood: string;
  zipCode: string;
  foundationDate: string;
  annualRevenue: number;
}
