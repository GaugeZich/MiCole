import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecorridosComponent } from './pages/recorridos/recorridos.component';

const routes: Routes = [
  {
    path:"recorridos",component:RecorridosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecorridosRoutingModule { }
