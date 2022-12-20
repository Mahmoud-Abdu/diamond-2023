import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MethodologyComponent } from './methodology.component';

const routes: Routes = [{
  path: "",
  component: MethodologyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MethodologyRoutingModule { }
