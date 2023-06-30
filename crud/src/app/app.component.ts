import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public user?: User;
  public users!: User[];

  public createUser: User = {
    name: 'Ivirson Daltro',
    profession: 'Dev',
    birthDate: '2011-10-05T14:48:00.000Z',
    // documentNumber: null,
    email: 'ivirson@email.com',
    password: '123',
    phone: '5581959787152',
    income: 25000.85,
    address: {
      zipCode: '25874963',
      street: 'Rua A',
      number: 154,
      complement: 'Casa de esquina',
      neighborhood: 'Bairro B',
      city: 'Cidade C',
      state: 'PE',
    },
  };

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('USERS') || '[]');

    const userAuthenticated = JSON.parse(
      localStorage.getItem('USER') || 'null'
    );

    if (userAuthenticated) {
      this.user = userAuthenticated;
    }

    // this.users.push(this.createUser);
    // localStorage.setItem('USERS', JSON.stringify(this.users));
  }

  public handleLogin(user: Partial<User>): void {
    const userExist: User | undefined = this.users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (userExist) {
      console.log('Usuário autenticado', userExist);
      this.user = userExist;
      localStorage.setItem('USER', JSON.stringify(this.user));
    } else {
      console.log('Falha ao logar!');
    }
  }
}
