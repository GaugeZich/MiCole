import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubeComponent } from './pages/sube/sube.component';
import { CargarComponent } from './components/cargar/cargar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

const routes: Routes = [
  {
    path:"sube",component:SubeComponent
  },
  {
    path:"cargar",component:CargarComponent
  },
  {
    path:"tarjetas",component:TarjetasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubeRoutingModule { }
