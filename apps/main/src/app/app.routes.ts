import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'joke-with-cache',
  },
  {
    path: 'joke-with-cache',
    loadComponent: () => import('./joke-with-cache.component').then((c) => c.JokeWithCacheComponent),
  },
  {
    path: 'joke-withought-cache',
    loadComponent: () => import('./joke-withought-cache.component').then((c) => c.JokeWithoughtCacheComponent),
  },
];
