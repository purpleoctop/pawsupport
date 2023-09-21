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
export class DetailsComponent {}
