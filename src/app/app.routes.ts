import { Routes } from '@angular/router';
import {AuthentificationPage} from './features/auth/views/authentification/authentification.page';
import {GuestGuard} from './core/guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [GuestGuard],
    component: AuthentificationPage,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];
