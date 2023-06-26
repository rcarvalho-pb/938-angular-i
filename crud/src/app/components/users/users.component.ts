import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '80%',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((user: User) => {
      const users = JSON.parse(localStorage.getItem('USERS') || '[]');
      users.push(user);
      localStorage.setItem('USERS', JSON.stringify(users));
    });
  }
}
