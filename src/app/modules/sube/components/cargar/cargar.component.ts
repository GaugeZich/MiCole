import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent {
  // Variable para el sidebar
  opened = false;
  
  // Arreglo que almacenará la colección de usuarios
  coleccionUsuarios: Usuario[] = [];

  // Variable que representa al usuario seleccionado
  usuarioSeleccionado!: Usuario;

  // Variable para guardar la información del usuario
  info_cuenta: Usuario | undefined;

  constructor(
    // Importaciones de los servicios
    public servicioCrud: CrudService,
    public auth: AuthService
  ){}

  // ngOnInit: Se inicializa al abrir el componente
  async ngOnInit(): Promise<void>{
    /*
    Obtiene al usuario conectado y recorre todo los usuarios
    comparando sus ID's para encontrar el usuario conectado
    */
    this.auth.auth.currentUser.then((userLogeado) => {
      this.servicioCrud.obtenerUsuario().subscribe(usuarios => {
        if (userLogeado) {
          // Guarda toda la información de ese usuario conectado
          this.info_cuenta = usuarios.find(usuario => usuario.uid === userLogeado.uid);
        }
      })
    })    
  }
}
