import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AdministrarComponent } from './components/administrar/administrar.component';
import { SubirComponent } from './components/subir/subir.component';

const routes: Routes = [
  {
    path:"admin",component:AdminComponent
  },
  {
    path:"administrar",component:AdministrarComponent
  },
  {
    path:"subir",component:SubirComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
