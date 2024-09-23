import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent, // Eagerly loaded HomeComponent
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  

  {
    path: 'services/education',
    loadChildren: () =>
      import('./services/education/education.module').then(
        (m) => m.EducationModule
      ),
  },
  {
    path: 'services/health',
    loadChildren: () =>
      import('./services/health/health.module').then((m) => m.HealthModule),
  },
  {
    path: 'services/food',
    loadChildren: () =>
      import('./services/food/food.module').then((m) => m.FoodModule),
  },

  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'bank-details',
    loadChildren: () =>
      import('./bank-details/bank-details.module').then(
        (m) => m.BankDetailsModule
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default redirect to home
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, // Fallback in case of invalid route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
