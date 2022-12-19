import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [EmailComponent],
  imports: [
    CommonModule,
    EmailRoutingModule,
    NgbModule
  ]
})
export class EmailModule { }
