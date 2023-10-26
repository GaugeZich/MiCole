import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//declaraciones
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';


// MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// FORMULARIO
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// SERVICIOS
import { AuthService } from './services/auth.service';
//cosas nuevas 

import {MatDividerModule} from '@angular/material/divider';

import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    
    // MATERIAL
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    // ANGULAR

    FormsModule,
    ReactiveFormsModule,
    //cosas nuevas
    MatDividerModule

  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    LoginComponent,
    //cosas nuevas
    MatDividerModule
  ],
  providers: [ AuthService] // proveedor -> servicio
})
export class AuthModule { }