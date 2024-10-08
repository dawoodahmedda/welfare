import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education.component';

const routes: Routes = [
  {
    path: '',
    component: EducationComponent,
  },
];

@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class EducationModule { }
