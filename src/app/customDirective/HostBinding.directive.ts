import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector:'[my-Style]'
})
export class HostBindingDirective {
  constructor(private element:ElementRef, private renderer:Renderer2){

  }

  @HostBinding('style.color') mycolor;
  @HostBinding('style.border') myborder;

  @HostListener('mouseenter') applyMyStyle(){
    this.mycolor='green';
    this.myborder='3px solid blue'
  }

  @HostListener('mouseleave') removeMyStyle(){
    this.mycolor='blue'
    this.myborder='3px solid red'
  }
}