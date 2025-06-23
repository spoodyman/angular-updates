import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/router-outlet-data/router-outlet-data.component').then(m => m.RouterOutletDataComponent),
  }
];
