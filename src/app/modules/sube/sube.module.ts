import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubeComponent } from './pages/sube/sube.component';
import { SubeRoutingModule } from './sube-routing.module';

// Importaciones de angular material
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';

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
import { CargarComponent } from './components/cargar/cargar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';



@NgModule({
  declarations: [
    SubeComponent,
    CargarComponent,
    TarjetasComponent
  ],
  imports: [
    CommonModule,
    SubeRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule,
    MatStepperModule,
    MatSelectModule
  ],
  exports: [
    SubeComponent,
    CommonModule,
    SubeRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule,
    MatStepperModule,
    MatSelectModule
  ]
})
export class SubeModule { }
