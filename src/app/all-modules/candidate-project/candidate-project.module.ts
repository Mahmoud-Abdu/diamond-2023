import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateProjectRoutingModule } from './candidate-project-routing.module';
import { CandidateProjectComponent } from './candidate-project.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    CandidateProjectComponent
  ],
  imports: [
    CommonModule,
    CandidateProjectRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class CandidateProjectModule { }
