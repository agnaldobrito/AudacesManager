import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelsFormComponent } from '../../components/models-form/models-form.component';
import { ModelsListComponent } from '../../components/models-list/models-list.component';

const routes: Routes = [
  {
    path: '',
    component: ModelsListComponent,
  },
  {
    path: 'novo',
    component: ModelsFormComponent,
  },
  {
    path: 'editar/:id',
    component: ModelsFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelsRoutingModule {}
