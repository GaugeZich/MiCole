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

  coleccionUsuarios: Usuario[] = [];

  usuarioSeleccionado!: Usuario;

  info_cuenta: Usuario | undefined;

  constructor(
    public servicioCrud: CrudService,
    public servicioFirestore: FirestoreService,
    public servicioAuth: AuthService,
    public router: Router
  ){}

  async ngOnInit(): Promise<void>{
    this.servicioAuth.auth.currentUser.then((userLogeado) => {
      this.servicioCrud.obtenerUsuario().subscribe(usuarios => {
        if (userLogeado) {
          this.info_cuenta = usuarios.find(usuario => usuario.uid === userLogeado.uid);
          console.log(this.info_cuenta);
        }
      })
    })    
  }


  confirmarBorrar() {
    if (confirm("¿Está seguro?")) {
      this.borrarInformacion();
    }
  }

  borrarInformacion() {
    if (this.info_cuenta) {
      this.servicioCrud.eliminarUsuario(this.info_cuenta.uid)
        .then(res => {
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
