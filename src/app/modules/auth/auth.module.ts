import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// FORMULARIO
import { FormsModule } from '@angular/forms';

// SERVICIOS
import { AuthService } from './services/auth.service';
import {FirestoreService} from 'src/app/shared/services/firestore.service';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
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
    FormsModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [ AuthService, FirestoreService ] // proveedor -> servicio
  
})
export class AuthModule { }