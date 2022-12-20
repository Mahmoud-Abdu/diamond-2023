import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguratorRoutingModule } from './configurator-routing.module';
import { ConfiguratorComponent } from './configurator.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ConfiguratorComponent
  ],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ConfiguratorModule { }
