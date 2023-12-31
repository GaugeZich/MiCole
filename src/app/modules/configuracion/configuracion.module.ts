import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';

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

//importo el slider toggle 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

//importo la linea que divide los botones 
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    ConfiguracionComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatSlideToggleModule,
    RouterModule,
    MatDividerModule
  ],
  exports:[
    MatIconModule, 
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule,
    ConfiguracionComponent
  ]
})
export class ConfiguracionModule { }
