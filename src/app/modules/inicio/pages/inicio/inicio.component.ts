import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  opened = false;
  admin = false;

  constructor(
    private authService: AuthService,
    private crud: CrudService,
    private router: Router,
    private auth: AngularFireAuth
  ){}

  ngOnInit(): void{
    this.authService.auth.currentUser.then((userLogeado) => {
      this.crud.obtenerUsuario().subscribe(usuarios => {
        if (userLogeado) {
          const isAdmin = usuarios.find(usuario => usuario.uid === userLogeado.uid && usuario.rol === 'admin');
          this.admin = isAdmin !== undefined;
        }
      })
    })    
  }

  entrarCuenta(){
    this.auth.authState.subscribe(usuarios => {
      if(usuarios) {
        this.router.navigate(['/cuenta'])
      }else{
        this.router.navigate(['/login'])
      }
    })
  }
}
