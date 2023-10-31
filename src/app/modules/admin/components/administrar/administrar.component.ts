import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent {
  coleccionUsuarios: Usuario[] = [];

  usuarioSeleccionado!: Usuario;

  usuario = new FormGroup({
    sube: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    apellido:  new FormControl('',Validators.required),
    email:  new FormControl('',Validators.required),
    dni:  new FormControl('',Validators.required),
    contrasena:  new FormControl('',Validators.required),
    rol:  new FormControl('',Validators.required)
  })

  constructor(
    public servicioCrud : CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerUsuario().subscribe(usuario => {
      this.coleccionUsuarios = usuario
    })
  }
// Funcion para editar los usuarios
mostrarModalEditar(usuarioSeleccionado: Usuario){
    this.usuarioSeleccionado = usuarioSeleccionado;

  /*
  Retomamos y enviamos los valores de ese usuario
  seleccionado, el ID no se vuelve a enviar porque
  no se modifica
  */
  this.usuario.setValue({
    sube: usuarioSeleccionado.sube,
    nombre: usuarioSeleccionado.nombre,
    apellido: usuarioSeleccionado.apellido,
    email: usuarioSeleccionado.email,
    dni: usuarioSeleccionado.dni,
    contrasena: usuarioSeleccionado.contrasena,
    rol: usuarioSeleccionado.rol
  })
  }

  editarUsuario(){
    let datos: Usuario = {
      uid: this.usuarioSeleccionado.uid,
      // Signo de exclamación "!" -> Puede recibir valores vacíos al inicializar
      sube: this.usuario.value.sube!,
      nombre: this.usuario.value.nombre!,
      apellido: this.usuario.value.apellido!,
      email: this.usuario.value.email!,
      dni: this.usuario.value.dni!,
      contrasena: this.usuario.value.contrasena!,
      rol: this.usuario.value.rol!,
      contrasena1: this.usuario.value.contrasena!
    }

  this.servicioCrud.editarUsuario(this.usuarioSeleccionado.uid, datos)
  .then(usuario => {
    alert("El producto fue modificado con exito.");
  })
  .catch(error => {
    alert("No se pudo modificar el producto \n"+error)
  })
  }
}
