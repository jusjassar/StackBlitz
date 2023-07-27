import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  { 
  searchStr:string="****AppComponent"
  inputMethod(srchStr:HTMLInputElement){
    this.searchStr=srchStr.value
  }
  demoDestroy:boolean=true;
  destroyComponent(){
    this.demoDestroy=false
  }
  
}

