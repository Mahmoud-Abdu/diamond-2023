import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateProjectRoutingModule } from './candidate-project-routing.module';
import { CandidateProjectComponent } from './candidate-project.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    CandidateProjectComponent,
    CandidateInfoComponent
  ],
  imports: [
    CommonModule,
    CandidateProjectRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class CandidateProjectModule { }
