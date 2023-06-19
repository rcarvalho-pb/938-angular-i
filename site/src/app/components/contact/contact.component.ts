import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public email!: string;

  ngOnInit(): void {
    this.email = 'ivirson_d@email.com';
  }

  public submitForm(): void {
    console.log(this.email);
  }
}
