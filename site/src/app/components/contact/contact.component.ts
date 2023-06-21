import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactPayload } from 'src/app/models/contact-payload.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Output() public sendFormData = new EventEmitter<ContactPayload>();

  public contactPayload!: ContactPayload;

  ngOnInit(): void {
    this.contactPayload = {
      email: '',
      message: '',
    };
  }

  public submitForm(): void {
    console.log(
      'Dado a ser enviado para o componente pai:',
      this.contactPayload
    );
    if (this.contactPayload.email && this.contactPayload.message) {
      this.sendFormData.emit(this.contactPayload);
    }
  }

  public isFormValid(): boolean {
    return !!this.contactPayload.email && !!this.contactPayload.message;
    // if (this.contactPayload.email && this.contactPayload.message) {
    //   return true;
    // }

    // return false;
  }
}
