import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankDetailsComponent } from './bank-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BankDetailsComponent }, // Empty path loads the BankDetailsComponent
];

@NgModule({
  declarations: [BankDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BankDetailsModule {}
