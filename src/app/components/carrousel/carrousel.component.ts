import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent {
  @Input() images!: string[];
  //= ['assets/images/dog-1.jpeg', 'assets/images/dog-2.jpeg', 'assets/images/paws.jpg', 'assets/images/dog-2.jpeg'];
  shownIndex = 0;

  goBack() {
    this.shownIndex--;
    console.log('goBack')

  }

  goForward() {
    this.shownIndex++;
    console.log('goForward')
  }
}
