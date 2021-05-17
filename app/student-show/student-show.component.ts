import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.css']
})
export class StudentShowComponent implements OnInit {

  students = [
    new Student(1,'Nilesh','Nirav','Bihar',9),
    new Student(2,'Hari','Bhanu','Jabalpur',9.6),
    new Student(3,'Aditya','Patel','Banglore',9.9),
    new Student(4,'Yukti','Sinha','MadhyaPradesh',10),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
