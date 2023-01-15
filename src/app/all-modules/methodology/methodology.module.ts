import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodologyRoutingModule } from './methodology-routing.module';
import { MethodologyDialogComponent } from './methodology-dialog/methodology-dialog.component';
import { MethodologyComponent } from './methodology.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    MethodologyComponent,
    MethodologyDialogComponent
  ],
  imports: [
    CommonModule,
    MethodologyRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MethodologyModule { }
