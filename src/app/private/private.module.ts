import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import { HomeComponent } from './components/home/home.component';
import { CollectionsListComponent } from './components/collections-list/collections-list.component';
import { CollectionsFormComponent } from './components/collections-form/collections-form.component';
import { ModelsListComponent } from './components/models-list/models-list.component';
import { ModelsFormComponent } from './components/models-form/models-form.component';
import { FullComponent } from './layout/full/full.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SideBarComponent,
    HomeComponent,
    CollectionsListComponent,
    CollectionsFormComponent,
    ModelsListComponent,
    ModelsFormComponent,
    FullComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PrivateModule {}
