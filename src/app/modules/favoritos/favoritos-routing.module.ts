import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';

const routes: Routes = [
  {
    path:"favoritos",component:FavoritosComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritosRoutingModule { }
