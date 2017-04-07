import { Component } from '@angular/core';
export class Student {
  firstName: string;
  lastName: string;
  id: number;
}
const STUDENTS: Student[] = [
  { id: 1, firstName: 'One', lastName: 'Student' },
  { id: 2, firstName: 'Two', lastName: 'Student' },
  { id: 3, firstName: 'Three', lastName: 'Student' },
  { id: 4, firstName: 'Four', lastName: 'Student' },
  { id: 5, firstName: 'Five', lastName: 'Student' },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Information';
  text = 'Some school, somewhere.'
  students = STUDENTS;
  selectedStudent: Student;
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}
