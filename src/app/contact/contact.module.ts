import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContactComponent }, // Empty path loads the ContactComponent
];

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ContactModule {}
