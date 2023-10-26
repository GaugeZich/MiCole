import { Component } from '@angular/core';
import { AuthModule } from '../auth.module';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide=true; // input de contraseña

  //importo el modelo
  usuarios: Usuario={
    uid: '', // id para autentificacion
    sube: '', //numero de sube 
    nombre: '', //nombre del usuario
    apellido: '', //apellido del usuario
    email: '', //email del usuario
    dni: '', //dni del usuario
    contrasena: '', //contrasena del usuario
    contrasena1:'', //confirmar la contrsena del usuario
    rol:'' //confirmar el rol que cumple
  }
 
  //declaramos los servicios de forma publica 
  constructor( 
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public Router: Router
  ){}
 
  //creo la función para inciciar sesión 
  async iniciar(){
    const credenciales={
      email: this.usuarios.email,
      contrasena:this.usuarios.contrasena
    };

    const res =await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.contrasena)
    .then(res=>{
      alert("Ha accedido con éxito :) ");
      console.log(credenciales.email);
      //redirigimos a la vista inicial 
      this.Router.navigate(['/inicio']);
    })
    .catch(error=>{
      alert("Hubo un error a inicial sesión :( \n"+error);
      console.log(credenciales.email);
    })
  }
}
