import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food.component';

const routes: Routes = [
  {
    path: '',
    component: FoodComponent,
  },
];

@NgModule({
  declarations: [FoodComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class FoodModule { }
