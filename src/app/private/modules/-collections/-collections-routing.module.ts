import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsFormComponent } from '../../components/collections-form/collections-form.component';
import { CollectionsListComponent } from '../../components/collections-list/collections-list.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsListComponent,
  },
  {
    path: 'novo',
    component: CollectionsFormComponent,
  },
  {
    path: 'editar/:id',
    component: CollectionsFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
