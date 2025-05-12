import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';


@Component({
  selector: 'app-child-lesson-details',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatButtonModule,
    AgGridModule

  ],
  templateUrl: './child-lesson-details.component.html',
  styleUrl: './child-lesson-details.component.css'
})
export class ChildLessonDetailsComponent {

  @Input() lesson: any;
}
