import { Routes } from '@angular/router';
import { GuestGuard } from '../../core/guards/guest.guard';

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('../../layout/main-layout/main-layout').then(m => m.MainLayout),
        canActivate: [GuestGuard],
        children: []
    },
  {
    path: 'authentification',
    loadComponent: () => import('./views/authentification/authentification.page').then(m => m.AuthentificationPage)
  }
];
