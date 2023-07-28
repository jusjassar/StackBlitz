import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './customAttributeDirectiveRenderer/customAttributeDirectiveRenderer.directive';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent,HighlightDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
