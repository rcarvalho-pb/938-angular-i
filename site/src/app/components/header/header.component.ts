import { Component, EventEmitter, Output } from '@angular/core';
import { ProfilesEnum } from 'src/app/constants/profiles.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public authEmitter = new EventEmitter<boolean>();

  public userProfile!: ProfilesEnum;

  public profilesEnum = ProfilesEnum;

  public userIsAuthenticated: boolean = false;

  public auth(): void {
    this.userIsAuthenticated = !this.userIsAuthenticated;
    this.userProfile = ProfilesEnum.ADMIN;
    this.authEmitter.emit(this.userIsAuthenticated);
  }
}
