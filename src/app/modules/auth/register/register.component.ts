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
    contrasena1:'', //confirmar la ontrsena del usuario
    rol:'usuario' //confirmar el rol que cumple
  }

  //es el uid para conectar con la base de datos 
  uid= '';

  //creamos la funcion para registrase 
  async Registrarse(){
    const credenciales ={
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    }

    const res= await this.servicioAuth.registrar(credenciales.email, credenciales.contrasena)
    .then(res=>{
      //alerta de que un asuario se pudo registar 
      alert("Usted se ha registrado con éxito :)");
      //llamamos uan nueva ruta para redirigirnos 
      this.router.navigate(["/login"]);
    })
    .catch(error=>
      alert("Hubo un problema al ingresar el nuevo usuario:( \n"+error)
    );

    //se crea una constante del UID para el UID que obtengamos 
    const uid = await this.servicioAuth.getUid();   

    //hacemos referencia del uid con el usuario 
    this.usuarios.uid=uid; 

    //llamamos a la funcion
    this.guardarUser();

    
  }

  //creamos la funcion asincrona para guardar los usuarios
  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios,this.usuarios.uid)
    .then(res =>{
      console.log(this.usuarios)
    })
    .catch(error =>{
      console.log('Error =>', error);
    })
  }
  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
}
