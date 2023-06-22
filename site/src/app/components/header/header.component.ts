import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public authEmitter = new EventEmitter<boolean>();

  public userIsAuthenticated: boolean = false;

  public auth(): void {
    this.userIsAuthenticated = !this.userIsAuthenticated;
    this.authEmitter.emit(this.userIsAuthenticated);
  }
}
