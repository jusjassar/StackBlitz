import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AgeComponent } from './age/age.component';

const appRoutes:Routes=[
  {path:'students',component:StudentsComponent},
  {path:'teachers',component:TeachersComponent}
]

@NgModule({
  imports: [BrowserModule,
  RouterModule.forRoot(appRoutes),
HttpClientModule],
  declarations: [
    AppComponent,
    StudentsComponent,
    TeachersComponent,
    AgeComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
