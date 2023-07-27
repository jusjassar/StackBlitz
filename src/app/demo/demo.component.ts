import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() enteredText: string = 'Hello World';
  // LifeCycle Hooks Exercise
  //1. Constructor

  constructor() {
    console.log('constructor started');
    console.log(this.enteredText);
  }
  ngOnChanges() {
    console.log('ngOnChanges Started  ' + this.enteredText);
  }
  ngOnInit() {
    console.log('ngOnInit Started');
    console.log(
      'Printing Entered Text Property from ngOnInit  ' + this.enteredText
    );
  }
  ngDoCheck() {
    console.log('doCheck Started  ' + this.enteredText);
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit Started  ' + this.enteredText);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked started  ' + this.enteredText);
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit Started  ' + this.enteredText);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked started  ' + this.enteredText);
  }
  ngOnDestroy() {
    console.log('onDestroy started ' + this.enteredText);
  }
}
