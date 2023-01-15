import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodologyRoutingModule } from './methodology-routing.module';
import { MethodologyComponent } from './methodology.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    MethodologyComponent
  ],
  imports: [
    CommonModule,
    MethodologyRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class MethodologyModule { }
