import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '', component:InicioComponent
  },
  {
    path:'',loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/recorridos/recorridos.module').then(m=>m.RecorridosModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/sube/sube.module').then(m=>m.SubeModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/informacion/informacion.module').then(m=>m.InformacionModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/configuracion/configuracion.module').then(m=>m.ConfiguracionModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
