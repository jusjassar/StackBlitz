import { Injectable } from "@angular/core";
import { Student } from './all.interfaces'
import { HttpClient } from '@angular/common/http'

@Injectable()

export class StudentService {

  constructor(private httpSrvcs: HttpClient){}
  studentList:Student[]=[
    {Name:'Alex',Course:'MBA',Marks:520,DOB:new Date('11-12-1997'),Gender:'male'},
    {Name:'Alex',Course:'MBA',Marks:520,DOB:new Date('14-10-1999'),Gender:'male'},
    {Name:'Alex',Course:'MBA',Marks:520,DOB:new Date('16-10.1996'),Gender:'male'}
  ]
  postData(){
      this.httpSrvcs.post('https://stack-blitz-data-default-rtdb.firebaseio.com/students.json',this.studentList).subscribe()
  }
}