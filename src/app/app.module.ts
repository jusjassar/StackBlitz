import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [BrowserModule,
HttpClientModule],
  declarations: [
    AppComponent,
    DemoComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
