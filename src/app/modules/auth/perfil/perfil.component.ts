import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CrudService } from '../../admin/services/crud.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AuthService } from '../services/auth.service';

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
    public servicioAuth: AuthService
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
}
