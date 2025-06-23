import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { map, of } from 'rxjs';

export const routes: Routes = [
  {
    path: '',
    redirectTo: () => {
      const router = inject(Router);
      const redirectToOne$ = of(false);

      return redirectToOne$.pipe(
        map((redirectToOne) =>
          router.createUrlTree([`/${redirectToOne ? '1' : '2'}`]),
        ),
      );
    },
    pathMatch: 'full'
  },
  {
    path: '1',
    loadComponent: () => import('./features/void-operator/void-operator').then(m => m.VoidOperator)
  },
  {
    path: '2',
    loadComponent: () => import('./features/void-operator/void-operator').then(m => m.VoidOperator)
  }
];
