import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss'],
})
export class FeatureItemComponent {
  @Input() public image!: string;
  @Input() public title!: string;
  @Input() public text!: string;

  public onButtonClicked(who: string): void {
    console.log(who, 'foi clicado');
  }
}
