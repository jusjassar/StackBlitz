import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,AfterContentInit{

  constructor() { }

  ngOnInit() {
    console.log("Hello From Init")
  }
@ContentChild('projected') projectedConenet:ElementRef;
@ContentChild('tempRef') tempRef:ElementRef

ngAfterContentInit(){
  console.log(this.projectedConenet.nativeElement.innerHTML)
  console.log(this.tempRef.nativeElement.innerHTML)
}
}