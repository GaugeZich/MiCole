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
  // Variables:
  opened = false; // Para el sidebar
  admin = false; // Para verificar si el usuario es admin


  constructor(
    // Importaciones de los servicios
    private authService: AuthService,
    private crud: CrudService,
    private router: Router,
    private auth: AngularFireAuth
  ){}

  // ngOnInit: Se inicializa al abrir el componente
  async ngOnInit(): Promise<void>{
    //Obtiene al usuario y verifica si es admin, recorriendo todos los usuarios comparando sus ID's
    this.authService.auth.currentUser.then((userLogeado) => {
      this.crud.obtenerUsuario().subscribe(usuarios => {
        if (userLogeado) {
          const isAdmin = usuarios.find(usuario => usuario.uid === userLogeado.uid && usuario.rol === 'admin');
          this.admin = isAdmin !== undefined; // Asigna verdadero para mostrar el boton de administrador
        }
      })
    })    
  }
  
  /*
  Verifica si hay un usuario conectado, si esto es asi el boton de "cuenta"
  lo llevara a "/cuenta", de lo contrario, lo llevara al "/login"
  */
  entrarCuenta(){
    this.auth.authState.subscribe(usuarios => {
      if(usuarios) {
        this.router.navigate(['/cuenta'])
      }else{
        this.router.navigate(['/login'])
      }
    })
  }

    /*
  Verifica si hay un usuario conectado, si esto es asi el boton de "sube"
  lo llevara a "/sube", de lo contrario, lo llevara al "/login"
  */
  entrarSube(){
    this.auth.authState.subscribe(usuarios => {
      if(usuarios) {
        this.router.navigate(['/sube'])
      }else{
        this.router.navigate(['/login'])
      }
    })
  }
}
