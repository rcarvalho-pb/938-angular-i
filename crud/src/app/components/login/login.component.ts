import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Output() public loginEmitter = new EventEmitter<Partial<User>>();
  public email?: string;
  public password?: string;
  public user?: Partial<User>;

  public login(): void {
    this.user = { email: this.email, password: this.password };
    this.loginEmitter.emit(this.user);
  }
}
