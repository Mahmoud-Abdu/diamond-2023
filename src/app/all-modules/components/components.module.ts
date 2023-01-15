import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddComponentComponent } from './add-component/add-component.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ComponentsComponent, AddComponentComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
  ],
})
export class ComponentsModule {}
