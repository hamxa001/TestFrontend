import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', 
  loadChildren: ()=> import('./dashboard/dashboard.module').then(x=>x.DashboardModule), canActivate:[AuthGuard]},
  { path: 'leaves', 
  loadChildren: ()=> import('./leaves/leaves.module').then(x=>x.LeavesModule), canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
