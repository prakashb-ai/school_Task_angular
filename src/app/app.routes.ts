import { Routes } from '@angular/router';
import { ParentformComponent } from './parentform/parentform.component';
import { TeacherformComponent } from './teacherform/teacherform.component';
import { ClassformComponent } from './classform/classform.component';
import { StudentformComponent } from './studentform/studentform.component';

export const routes: Routes = [
  { path: '', component: ParentformComponent },
  { path: 'teacher', component: TeacherformComponent },
  { path: 'class', component: ClassformComponent },
  { path: 'student', component: StudentformComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
