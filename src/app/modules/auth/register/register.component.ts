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
  // Input de contraseña
  hide = true;
  
  // Defino de forma publica los servicios y el ruteo
  constructor(
    public servicioAuth:AuthService,
    public servicioFirestore: FirestoreService,
    public router: Router
  ){}

  // Importo el modelo
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

  // Es el uid para conectar con la base de datos 
  uid= '';

  // Creamos la funcion para registrase 
  async Registrarse(){
    // Guardamos las credenciales (email y contraseña)
    const credenciales ={
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    }
    // Llamamos la función registrar del servicio Auth
    const res= await this.servicioAuth.registrar(credenciales.email, credenciales.contrasena)
    .then(res=>{
      // Alerta de que un asuario se pudo registar 
      alert("Usted se ha registrado con éxito :)");
      // Llamamos una nueva ruta para redirigirnos 
      this.router.navigate(["/login"]);
    })
    //por si el usuario no se pudo registrar
    .catch(error=>
      alert("Hubo un problema al ingresar el nuevo usuario:( \n"+error)
    );

    // Se crea una constante del UID para el UID que obtengamos 
    const uid = await this.servicioAuth.getUid();   

    // Hacemos referencia del uid con el usuario 
    this.usuarios.uid=uid; 

    // Llamamos a la funcion
    this.guardarUser();
  }

  // Función asincrona para guardar los usuarios en firebase
  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios,this.usuarios.uid)
    .then(res =>{
      console.log(this.usuarios)
    })
    .catch(error =>{
      console.log('Error =>', error);
    })
  }
  // ngOnInit: Se inicializa al abrir el componente
  async ngOnInit(){
    // Obtiene y muestra el UID
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
}
