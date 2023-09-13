import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';


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
  providers: [ AuthService ] // proveedor -> servicio
})
export class AuthModule { }