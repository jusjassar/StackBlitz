import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector:'[directive-highlight]'
})

export class HighlightDirective  implements OnInit{

    constructor(private element:ElementRef, private renderer:Renderer2){
        this.element=element;
        this.renderer=renderer
    }
ngOnInit(){
  this.renderer.setStyle(this.element.nativeElement, 'border','3px solid green');
  
}
}