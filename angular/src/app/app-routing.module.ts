import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './student-update/student-update.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  { path: 'student', component: StudentListComponent },
  { path: 'create-student', component: CreateStudentComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'update-student/:id', component: UpdateStudentComponent },
  { path: 'student-details/:id', component: StudentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
