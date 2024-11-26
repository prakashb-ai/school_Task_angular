import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentformComponent } from './parentform/parentform.component';
import { TeacherformComponent } from './teacherform/teacherform.component';
import { ClassformComponent } from './classform/classform.component';
import { StudentformComponent } from './studentform/studentform.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentformComponent,
    TeacherformComponent,
    ClassformComponent,
    StudentformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule {}
