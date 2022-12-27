import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponentComponent } from './add-component/add-component.component';
import { ComponentsComponent } from './components.component';

const routes: Routes = [{
  path: "",
  component: ComponentsComponent  
},
{
      path:"add-component" ,component:AddComponentComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
