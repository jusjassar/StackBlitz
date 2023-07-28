import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector:'[babuRao-style]'
})
export class DynamicCustomsDirective { 

  constructor(private element:ElementRef,private rendere:Renderer2){}

  @Input() colorFrmElement:string=''
  @HostBinding('sytle.color') mycolor = this.colorFrmElement;
}