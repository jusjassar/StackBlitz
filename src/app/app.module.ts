import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { DemoChildComponent } from './demo-child/demo-child.component';

const appRoutes:Routes=[
{path:'students',component:StudentsComponent}
]

@NgModule({
  imports: [BrowserModule,
  RouterModule.forRoot(appRoutes),
HttpClientModule,
FormsModule],
  declarations: [
    AppComponent,
    StudentsComponent,
    DemoComponent,
    DemoChildComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
