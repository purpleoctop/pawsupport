import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-important-stuff',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './important-stuff.component.html',
  styleUrls: ['./important-stuff.component.scss'],
})
export class ImportantStuffComponent {}
