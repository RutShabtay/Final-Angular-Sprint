import { Component } from '@angular/core';
import { ChildLessonDetailsComponent } from '../child-lesson-details/child-lesson-details.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Lesson {
  name: string;
  teacher: string;
  numberOfSessions: number;
  startDate: string;
  price: number;
  day: string;
  time: string;
}

@Component({
  selector: 'app-lessons-list',
  standalone: true,
  imports: [ChildLessonDetailsComponent, MatGridListModule, CommonModule],
  templateUrl: './lessons-list.component.html',
  styleUrl: './lessons-list.component.css'
})

export class LessonsListComponent {

  lessons: Lesson[] = [
    {
      name: 'Math 101',
      teacher: 'Mr. Cohen',
      numberOfSessions: 10,
      startDate: '2025-06-01',
      price: 500,
      day: 'Sunday',
      time: '10:00 AM',
    },
    {
      name: 'English Literature',
      teacher: 'Mrs. Levy',
      numberOfSessions: 8,
      startDate: '2025-06-05',
      price: 450,
      day: 'Thursday',
      time: '6:00 PM',
    },
    {
      name: 'History of Art',
      teacher: 'Dr. Shapiro',
      numberOfSessions: 12,
      startDate: '2025-01-01',
      price: 600,
      day: 'Tuesday',
      time: '3:00 PM',
    },
    {
      name: 'Physics for Beginners',
      teacher: 'Mr. Goldstein',
      numberOfSessions: 15,
      startDate: '2025-06-10',
      price: 750,
      day: 'Monday',
      time: '9:00 AM',
    },
    {
      name: 'Computer Science',
      teacher: 'Dr. Feldman',
      numberOfSessions: 10,
      startDate: '2025-02-15',
      price: 550,
      day: 'Wednesday',
      time: '7:00 PM',
    },
    {
      name: 'Math 101',
      teacher: 'Mr. Cohen',
      numberOfSessions: 10,
      startDate: '2025-06-01',
      price: 500,
      day: 'Sunday',
      time: '10:00 AM',
    },
    {
      name: 'English Literature',
      teacher: 'Mrs. Levy',
      numberOfSessions: 8,
      startDate: '2025-06-05',
      price: 450,
      day: 'Thursday',
      time: '6:00 PM',
    },
    {
      name: 'Math 101',
      teacher: 'Mr. Cohen',
      numberOfSessions: 10,
      startDate: '2025-06-01',
      price: 500,
      day: 'Sunday',
      time: '10:00 AM',
    },
    {
      name: 'English Literature',
      teacher: 'Mrs. Levy',
      numberOfSessions: 8,
      startDate: '2025-06-05',
      price: 450,
      day: 'Thursday',
      time: '6:00 PM',
    },
  ];

  isPassed(lesson: any): boolean {
    const currentDate = new Date();
    const lessonDate = new Date(lesson.startDate);
    return (lessonDate < currentDate || (lessonDate == currentDate && lesson.time < currentDate.getHours()));
  }

}
