import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLeavesComponent } from './add-leaves/add-leaves.component';


@NgModule({
  declarations: [LeavesComponent, ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AddLeavesComponent
  ]
})
export class LeavesModule { }
