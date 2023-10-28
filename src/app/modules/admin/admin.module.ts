import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Declaraciones
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { AdministrarComponent } from './components/administrar/administrar.component';
import { SubirComponent } from './components/subir/subir.component';
import { ListComponent } from './components/list/list.component';

// Importaciones para el navbar:
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

// Importaciones de material
import {MatListModule} from '@angular/material/list';

// Importaciones para el formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AdministrarComponent,
    SubirComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class AdminModule { }
