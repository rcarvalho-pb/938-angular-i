import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  // public sectionTitle: string = 'Destaques';

  public getTitle(): string {
    return 'Título da seção';
  }

  public featuresData = {
    sectionTitle: 'Destaques',
    features: [
      {
        image: './assets/images/feature1.png',
        title: 'Destaque 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor arcu, malesuada eget posuere et.',
        isActive: true,
      },
      {
        image: './assets/images/feature2.png',
        title: 'Destaque 2',
        text: 'Aenean laoreet, felis id sollicitudin fringilla, leo orci iaculis eros, et volutpat nunc lacus ut sapien.',
        isActive: false,
      },
      {
        image: './assets/images/feature3.png',
        title: 'Destaque 3',
        text: 'Aenean non eros congue leo consectetur fermentum. Quisque ut dignissim tortor, eget porttitor magna.',
        isActive: true,
      },
      {
        image: './assets/images/feature4.png',
        title: 'Destaque 4',
        text: 'Duis id odio dapibus, finibus tortor eget, cursus nunc. Morbi egestas nisl orci, in cursus ipsum cursus et.',
        isActive: true,
      },
    ],
  };
}
