import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubeComponent } from './pages/sube/sube.component';

import { SubeRoutingModule } from './sube-routing.module';

// Importaciones de angular material
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    SubeComponent
  ],
  imports: [
    CommonModule,
    SubeRoutingModule,
    MatGridListModule
  ],
  exports: [
    SubeComponent
  ]
})
export class SubeModule { }
