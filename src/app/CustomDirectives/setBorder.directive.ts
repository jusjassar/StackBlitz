import { Directive, ElementRef, OnInit } from "@angular/core";
import { RadioControlValueAccessor } from "@angular/forms";

@Directive({
  selector: '[dir-setBorder]'
})
export class SetBorder  implements OnInit{
  
  constructor(private element:ElementRef){
    // console.log(element)
    this.element=element
  }
ngOnInit() {
  let element = this.element.nativeElement.style;
  element.border='2px solid blue';
  element.background='yellow';
  console.log(element)
  element.borderRadius='5px'

}

}