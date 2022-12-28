import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllModulesComponent } from "./all-modules.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: AllModulesComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: "components",
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
      },
      {
        path: "admin",
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: "knowledge",
        loadChildren: () => import('./knowledge-library/knowledge-library.module').then(m => m.KnowledgeLibraryModule)
      },
      {
        path: "methodology",
        loadChildren: () => import('./methodology/methodology.module').then(m => m.MethodologyModule)
      },
      {
        path: "candidate",
        loadChildren: () => import('./candidate-project/candidate-project.module').then(m => m.CandidateProjectModule)
      },
      {
        path: "configurator",
        loadChildren: () => import('./configurator/configurator.module').then(m => m.ConfiguratorModule)
      },
      {
        path: "estimator",
        loadChildren: () => import('./estimator/estimator.module').then(m => m.EstimatorModule)
      }

    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllModulesRoutingModule { }
