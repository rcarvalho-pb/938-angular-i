import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Input() public user?: User;

  public users!: User[];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.users = JSON.parse(localStorage.getItem('USERS') || '[]');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '80%',
      disableClose: true,
      data: this.user,
    });

    dialogRef.afterClosed().subscribe((user: User) => {
      this.getUsers();
      this.users.push(user);
      localStorage.setItem('USERS', JSON.stringify(this.users));
    });
  }
}
