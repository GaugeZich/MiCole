import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  opened = false;
  admin = false;

  constructor(
    private userService: AuthService,
    private crud: CrudService
  ){}

  ngOnInit(): void{
    this.userService.auth.currentUser.then((userLogeado) => {
      this.crud.obtenerUsuario().subscribe(usuarios => {
        if (userLogeado) {
          const isAdmin = usuarios.find(usuario => usuario.uid === userLogeado.uid && usuario.rol === 'admin');
          this.admin = isAdmin !== undefined;
        }
      })
    })
  }


}
