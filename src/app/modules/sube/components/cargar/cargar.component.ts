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
  opened = false;

  
  coleccionUsuarios: Usuario[] = [];

  usuarioSeleccionado!: Usuario;

  info_cuenta: Usuario | undefined;

  constructor(
    public servicioCrud: CrudService,
    public auth: AuthService
  ){}

  async ngOnInit(): Promise<void>{
    this.auth.auth.currentUser.then((userLogeado) => {
      this.servicioCrud.obtenerUsuario().subscribe(usuarios => {
        if (userLogeado) {
          this.info_cuenta = usuarios.find(usuario => usuario.uid === userLogeado.uid);
          console.log(this.info_cuenta);
        }
      })
    })    
  }
}
