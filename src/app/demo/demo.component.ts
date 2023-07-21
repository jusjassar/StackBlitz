import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  searchText:string='Hello';
  searchOutput:string='';
  searchedEntered(searchStr:HTMLInputElement){
    console.log(searchStr.value)
  }
  inputMethod(data:Event){
    console.log((<HTMLInputElement>data.target).value)
  }
 
}