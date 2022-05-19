import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { FullComponent } from './layout/full/full.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: FullComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'colecoes',
        loadChildren: () =>
          import('./modules/-collections/-collections.module').then(
            (m) => m.CollectionsModule
          ),
      },
      {
        path: 'modelos',
        loadChildren: () =>
          import('./modules/-models/-models.module').then(
            (m) => m.ModelsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
