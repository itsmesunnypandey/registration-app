import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { ContactInfo } from './pages/contact-info/contact-info';
import { SuccessPage } from './pages/success-page/success-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'contact-info',
    component: ContactInfo
  },
  {
    path: 'success-page',
    component: SuccessPage
  }
];
