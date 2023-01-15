import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimatorComponent } from './estimator.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EstimatorRoutes } from './estimator.routing';
import {MatIconModule} from '@angular/material/icon';
import { EstimatorInfoComponent } from './estimator-info/estimator-info.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




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
    MatIconModule,
    MatFormFieldModule,
    MatInputModule



  ]
})
export class EstimatorModule { }
