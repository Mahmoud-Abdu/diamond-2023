import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguratorRoutingModule } from './configurator-routing.module';
import { ConfiguratorComponent } from './configurator.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddConfiguratorComponent } from './add-configurator/add-configurator.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    ConfiguratorComponent,
    AddConfiguratorComponent
  ],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ConfiguratorModule { }
