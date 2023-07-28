import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DynamicCustomsDirective } from './customDirective/custom.Directive';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent,DynamicCustomsDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
