import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubeComponent } from './pages/sube/sube.component';

const routes: Routes = [
  {
    path:"sube",component:SubeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubeRoutingModule { }
