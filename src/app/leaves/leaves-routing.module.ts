import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavesComponent } from './leaves.component';
import { AddLeavesComponent } from './add-leaves/add-leaves.component';

const routes: Routes = [
  { path: '', component: LeavesComponent },
  { path: 'AddLeave', loadComponent: ()=>import('./add-leaves/add-leaves.component').then(x=>x.AddLeavesComponent)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
