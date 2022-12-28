import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimatorComponent } from './estimator.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EstimatorRoutes } from './estimator.routing';
import {MatIconModule} from '@angular/material/icon';
import { EstimatorInfoComponent } from './estimator-info/estimator-info.component';



@NgModule({
  declarations: [
    EstimatorComponent,
    EstimatorInfoComponent
  ],
  imports: [
    CommonModule,
    EstimatorRoutes,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule



  ]
})
export class EstimatorModule { }
