import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    DataTablesModule,
    NgbModule
  ]
})
export class ActivitiesModule { }
