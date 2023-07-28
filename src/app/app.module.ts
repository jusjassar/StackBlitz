import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HoverDirective } from './customsDirectives/hover.custom.directive';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent,HoverDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
