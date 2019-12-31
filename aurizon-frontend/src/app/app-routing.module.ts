import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../app/components/auth/auth.component';


const routes: Routes = [

  { path: 'auth', component: AuthComponent },
  { path: 'facilities', loadChildren: () => import('../app/components/facility/facility.module').then(m => m.FacilityModule) },
  { path: '', component: AuthComponent },
  { path: '*', component: AuthComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
