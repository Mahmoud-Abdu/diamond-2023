import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeLibraryRoutingModule } from './knowledge-library-routing.module';
import { KnowledgeLibraryComponent } from './knowledge-library.component';
import {MatIconModule} from '@angular/material/icon';
import { KnowledgeLibraryDetailsComponent } from './knowledge-library-details/knowledge-library-details.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    KnowledgeLibraryComponent,
    KnowledgeLibraryDetailsComponent
  ],
  imports: [
    CommonModule,
    KnowledgeLibraryRoutingModule,
    MatIconModule,MatTableModule
  ]
})
export class KnowledgeLibraryModule { }
