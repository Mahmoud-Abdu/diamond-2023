import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeLibraryComponent } from './knowledge-library.component';

const routes: Routes = [
  {
    path: "",
    component: KnowledgeLibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeLibraryRoutingModule { }
