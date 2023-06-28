import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlState,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  public user?: User;
  public userForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateUserComponent>) {}

  ngOnInit(): void {
    this.buildForm();
    this.birthDateSubscription();
  }

  public buildForm(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ]{2,}(?: [a-zA-ZÀ-ÿ]+){1,}$'),
      ]),
      profession: new FormControl(),
      birthDate: new FormControl(null, [
        Validators.required,
        // TO DO - Encontrar os problemas no regEx
        // Validators.pattern(
        //   `/^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/`
        // ),
      ]),
      documentNumber: new FormControl('0123457890', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        this.documentValidator,
      ]),
      email: new FormControl(null, [
        Validators.required,
        // Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [Validators.required]),
      phone: new FormControl(),
      address: new FormGroup({
        zipCode: new FormControl(),
        street: new FormControl(),
        number: new FormControl(),
        complement: new FormControl(),
        neighborhood: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
      }),
    });
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onSubmit(): void {
    this.user = this.userForm.value;
    this.dialogRef.close(this.user);
  }

  private birthDateSubscription() {
    const form = this.userForm;
    this.userForm.controls['birthDate'].valueChanges.subscribe({
      next(value) {
        // console.log(value);
        // console.log(form);
      },
    });
  }

  private documentValidator({ value }: FormControlState<string>) {
    if (!value) return { invalidDocument: true };
    value = value.replace(/[^\d]+/g, '');
    if (value == '') return { invalidDocument: true };

    // Elimina CPFs invalidos conhecidos
    if (
      value.length != 11 ||
      value == '00000000000' ||
      value == '11111111111' ||
      value == '22222222222' ||
      value == '33333333333' ||
      value == '44444444444' ||
      value == '55555555555' ||
      value == '66666666666' ||
      value == '77777777777' ||
      value == '88888888888' ||
      value == '99999999999'
    )
      return { invalidDocument: true };

    // Valida 1o digito
    let add = 0;

    for (let i = 0; i < 9; i++) {
      add += parseInt(value.charAt(i)) * (10 - i);
    }

    let rev = 11 - (add % 11);

    if (rev == 10 || rev == 11) rev = 0;

    if (rev != parseInt(value.charAt(9))) return { invalidDocument: true };

    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(value.charAt(i)) * (11 - i);
    }

    rev = 11 - (add % 11);

    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(value.charAt(10))) return { invalidDocument: true };

    return null;
  }
}
