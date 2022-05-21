import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { FullComponent } from './layout/full/full.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: FullComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
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
