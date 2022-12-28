import { EstimatorInfoComponent } from './estimator-info/estimator-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimatorComponent } from './estimator.component';


const routes: Routes = [
  {
    path:""
    ,component:EstimatorComponent
   },
   {
    path:'general-information'
    ,component:EstimatorInfoComponent
   }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatorRoutes{}
