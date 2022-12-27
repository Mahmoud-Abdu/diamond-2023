import { AddConfiguratorComponent } from './add-configurator/add-configurator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguratorComponent } from './configurator.component';

const routes: Routes = [{
  path: "",
  component: ConfiguratorComponent
},
{
  path:"add-cofigurator",
  component:AddConfiguratorComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguratorRoutingModule { }
