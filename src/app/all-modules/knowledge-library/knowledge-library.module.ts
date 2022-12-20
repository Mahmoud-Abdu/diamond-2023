import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgeLibraryRoutingModule } from './knowledge-library-routing.module';
import { KnowledgeLibraryComponent } from './knowledge-library.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    KnowledgeLibraryComponent
  ],
  imports: [
    CommonModule,
    KnowledgeLibraryRoutingModule,
    MatIconModule
  ]
})
export class KnowledgeLibraryModule { }
