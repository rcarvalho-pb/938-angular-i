import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AddressData } from 'src/app/models/address-data.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnChanges {
  @Input() public address!: AddressData;

  ngOnChanges(changes: SimpleChanges) {
    let number = this.address.data?.number ? this.address.data?.number : 'S/N';

    // Coalescencia nula
    number = this.address.data?.number ?? 'S/N';
    // this.address.data?.number = this.address.data?.number || 'S/N';
  }
}
