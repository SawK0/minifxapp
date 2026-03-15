import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
  },
  {
    path: 'tools/newline-to-comma',
    loadComponent: () => import('./features/tools/newline-to-comma/newline-to-comma').then(m => m.NewlineToComma),
  },
];
