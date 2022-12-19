import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailviewRoutingModule } from './mailview-routing.module';
import { MailviewComponent } from './mailview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MailviewComponent],
  imports: [
    CommonModule,
    MailviewRoutingModule,
    NgbModule
  ]
})
export class MailviewModule { }
