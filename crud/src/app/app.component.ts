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

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('USERS') || '[]');
  }

  public handleLogin(user: Partial<User>): void {
    const userExist: User | undefined = this.users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (userExist) {
      console.log('Usuário autenticado', userExist);
      this.user = userExist;
    } else {
      console.log('Falha ao logar!');
    }
  }
}
