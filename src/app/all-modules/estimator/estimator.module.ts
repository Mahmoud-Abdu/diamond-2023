import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimatorComponent } from './estimator.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EstimatorRoutes } from './estimator.routing';



@NgModule({
  declarations: [
    EstimatorComponent
  ],
  imports: [
    CommonModule,EstimatorRoutes,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class EstimatorModule { }
