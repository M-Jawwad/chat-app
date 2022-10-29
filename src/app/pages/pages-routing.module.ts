import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../core/dashbaord/home/home.component';

const routes: Routes = [
  {
      path: '', component: HomeComponent,
      children: [
        // { path: '', redirectTo: 'users' },
        { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
        { path: '**', redirectTo: 'users' }
      ]
  },
  {
      path: '**', redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
