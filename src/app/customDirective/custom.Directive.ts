import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector:'[babuRao-style]'
})
export class DynamicCustomsDirective { 

  constructor(){}

  @Input() colorFrmElement:string='red'
  // @HostBinding('sytle.color') mycolor = this.colorFrmElement;
}