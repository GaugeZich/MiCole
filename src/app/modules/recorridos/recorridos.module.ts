import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecorridosRoutingModule } from './recorridos-routing.module';

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
import { RecorridosComponent } from './pages/recorridos/recorridos.component';


@NgModule({
  declarations: [
    RecorridosComponent
  ],
  imports: [
    CommonModule,
    RecorridosRoutingModule,
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
    RouterModule,
    MatSidenavModule
  ]
})
export class RecorridosModule { }
