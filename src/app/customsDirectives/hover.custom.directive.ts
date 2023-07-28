import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector:'[custom-directive-hover]'
})
export class HoverDirective {

  constructor(private element:ElementRef,private renderer:Renderer2){
    this.element=element;
    this.renderer=renderer;
  }

@HostListener('mouseenter') mousein(){

  this.renderer.setStyle(this.element.nativeElement,'color', 'blue')
  this.renderer.setStyle(this.element.nativeElement,'border','none')

}
@HostListener('mouseleave') mouseout(){
  this.renderer.setStyle(this.element.nativeElement, 'color','green')
  this.renderer.setStyle(this.element.nativeElement,'border','2px solid red')
}

}