import { Component, OnInit } from '@angular/core';
import { StudentService } from '../students.service'


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentSrvcs:StudentService) { }

  ngOnInit() {
  }
  addStudents(){
    this.studentSrvcs.postData()
  }
}