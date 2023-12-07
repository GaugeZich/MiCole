import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CrudService } from '../../admin/services/crud.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  // Arreglo para la colección de usuarios
  coleccionUsuarios: Usuario[] = [];

  // Variable para el usuario seleccionado
  usuarioSeleccionado!: Usuario;

  // Variable para la información de la cuenta
  info_cuenta: Usuario | undefined;

  constructor(
    // Importaciones de los servicios
    public servicioCrud: CrudService,
    public servicioFirestore: FirestoreService,
    public servicioAuth: AuthService,
    public router: Router
  ){}

  // ngOnInit: Se inicializa al abrir el componente
  async ngOnInit(): Promise<void>{
    /*
    Obtiene al usuario conectado y recorre todo los usuarios
    comparando sus ID's para encontrar el usuario conectado
    */
    this.servicioAuth.auth.currentUser.then((userLogeado) => {
      this.servicioCrud.obtenerUsuario().subscribe(usuarios => {
        if (userLogeado) {
          // Guarda toda la información de ese usuario conectado
          this.info_cuenta = usuarios.find(usuario => usuario.uid === userLogeado.uid);
        }
      })
    })    
  }

  // Popup para confirmar el borrado de la información
  confirmarBorrar() {
    if (confirm("¿Está seguro?")) {
      this.borrarInformacion();
    }
  }

  // Función para borrar la información de la cuenta del usuario
  borrarInformacion() {
    if (this.info_cuenta) {
      // Llama a la función del servicioCrud y borra la info por el UID
      this.servicioCrud.eliminarUsuario(this.info_cuenta.uid)
        .then(res => {
          //  Cierra sesión, te redirecciona al login y por ultimo elimina el autenticador de firestore
          alert("La información ha sido eliminada correctamente!");
          this.servicioAuth.cerrarSesion()
          this.router.navigate(['/login']);
          this.servicioFirestore.eliminarAutenticador(this.info_cuenta?.uid)
        })
        .catch(error => {
          alert("Hubo un error al eliminar la información: \n" + error);
        });
    }
  }

}
