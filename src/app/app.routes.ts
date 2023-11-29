import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomelessCatalogComponent } from './pages/homeless-catalog/homeless-catalog.component';
import { AdoptedCatalogComponent } from './pages/adopted-catalog/adopted-catalog.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'home',
    component: AboutUsComponent,
  },
  {
    path: 'homeless-catalog',
    component: HomelessCatalogComponent,
  },
  {
    path: 'adopted-catalog',
    component: AdoptedCatalogComponent,
  },
  {
    path: ':id/details',
    component: DetailsComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
