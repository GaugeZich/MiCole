import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { InformacionComponent } from './pages/informacion/informacion.component';

// Importaciones para el navbar:
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

// Importaciones para buscador
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

// Importaciones para sidebar
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { CuadroComponent } from './components/cuadro/cuadro.component';


@NgModule({
  declarations: [
    InformacionComponent,
    CuadroComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule,
    InformacionComponent,
    CuadroComponent
  ]
})
export class InformacionModule { }
