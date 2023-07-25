import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('ageIn') dobIn:ElementRef
  @ViewChild('ageOut') ageOutPut:ElementRef
  currentYear:number;
  studentBirthYear:number;
  calculateAge(){
    this.currentYear = new Date().getFullYear();
    
    this.studentBirthYear = new Date(this.dobIn.nativeElement.value).getFullYear();
    this.ageOutPut.nativeElement.value = this.currentYear - this.studentBirthYear
    

  }
}