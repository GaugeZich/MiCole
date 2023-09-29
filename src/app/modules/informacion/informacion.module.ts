import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { InformacionComponent } from './pages/informacion/informacion.component';



@NgModule({
  declarations: [
    InformacionComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule
  ],
  exports: [
    InformacionComponent
  ]
})
export class InformacionModule { }
