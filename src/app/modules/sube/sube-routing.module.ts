import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubeComponent } from './pages/sube/sube.component';
import { CargarComponent } from './component/cargar/cargar.component';

const routes: Routes = [
  {
    path:"sube",component:SubeComponent
  },
  {
    path:"cargar",component:CargarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubeRoutingModule { }
