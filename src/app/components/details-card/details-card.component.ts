import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportantStuffComponent } from '../important-stuff/important-stuff.component';
import { CarrouselComponent } from '../carrousel/carrousel.component';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [CommonModule, ImportantStuffComponent, CarrouselComponent],
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export class DetailsCardComponent {
  images = [
    'assets/images/dog-1.jpeg',
    'assets/images/dog-2.jpeg',
    'assets/images/paws.jpg',
    'assets/images/dog-2.jpeg',
  ];
}
