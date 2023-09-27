import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FirestoreService} from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; // input de contraseña
  
  //defino de forma publica los servicios y el ruteo
  constructor(
    public servicioAuth:AuthService,
    public servicioFirestore: FirestoreService,
    public router: Router
  ){}

  //importo el modelo
  usuarios: Usuario={
    uid: '', // id para autentificacion
    sube: '', //numero de sube 
    nombre: '', //nombre del usuario
    apellido: '', //apellido del usuario
    email: '', //email del usuario
    dni: '', //dni del usuario
    contrasena: '', //contrasena del usuario
    contrasena1:'' //confirmar la ontrsena del usuario
  }

}
