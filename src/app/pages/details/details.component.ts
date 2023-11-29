import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsCardComponent } from 'src/app/components/details-card/details-card.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, DetailsCardComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
 sampleAnimal  =  {
    id:1, 
    name: 'Simba',
    age: 1,
    location: 'Tbilisi',
    sex: 'boy',
    healthy: true,
    sterilized: true,
    type: 'dog',
    vaccinated: true,
    images: [
      "assets/images/simba-1.jpeg",
      "assets/images/simba-2.jpeg"
    ],
    breed: 'Dachshund mix',
    isNew: true,
  }
}
