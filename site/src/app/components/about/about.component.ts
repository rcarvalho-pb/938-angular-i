import { Component, Input } from '@angular/core';
import { AboutData } from 'src/app/models/about-data.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() public aboutData!: AboutData;
}
