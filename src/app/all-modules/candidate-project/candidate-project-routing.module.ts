import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateProjectComponent } from './candidate-project.component';

const routes: Routes = [{
  path: "",
  component: CandidateProjectComponent
},
{
  path:'general-information',
  component:CandidateInfoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateProjectRoutingModule { }
