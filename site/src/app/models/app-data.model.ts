import { AboutData } from './about-data.model';
import { AddressData } from './address-data.model';
import { FeaturesData } from './feature-data.model';

export interface AppData {
  features: FeaturesData;
  about: AboutData;
  address: AddressData;
}
