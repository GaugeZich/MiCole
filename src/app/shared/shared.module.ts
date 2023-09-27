import { NgModule } from '@angular/core';

import { CommonModule, formatCurrency } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';

// Importaciones para el navbar:
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

// Importaciones para buscador
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from '../app-routing.module';

// Importaciones para sidebar
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,

    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class SharedModule { }
