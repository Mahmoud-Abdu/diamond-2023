import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateProjectComponent } from './candidate-project.component';

const routes: Routes = [{
  path: "",
  component: CandidateProjectComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateProjectRoutingModule { }
