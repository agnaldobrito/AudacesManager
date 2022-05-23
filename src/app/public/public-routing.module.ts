import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoverComponent } from './components/password-recover/password-recover.component';
import { ContentComponent } from './layout/content/content.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: ContentComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        // redirectTo: 'loginForm',
        component: LoginComponent,
      },
      // {
      //   path: 'loginForm',
      //   component: LoginComponent,
      // },
      {
        path: 'recover',
        component: PasswordRecoverComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
