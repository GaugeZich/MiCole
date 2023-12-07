import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  // Variable para el sidebar
  opened = false;

  constructor(
    // Importaciones de los servicios
    private router: Router,
    private auth: AngularFireAuth
  ){}

  /*
  Esta funcion determina si el usuario esta conectado, si es asi al darle click al boton,
  te llevara a la vista de "cuenta", de lo contrario te llevara al login
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
}
