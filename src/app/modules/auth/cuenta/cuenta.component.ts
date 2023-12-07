import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {

  constructor(
    // Importaciones del servicio
    private servicioAuth: AuthService,
    private router: Router,
  ){}

  /*
  Funcion para cerrar sesión de la cuenta llamando la funcion del servicioAuth
  */
  async salir(){
    const res = await this.servicioAuth.cerrarSesion()
    .then(res => {
      alert("Se ha cerrado la sesion correctamente");
      console.log(res);
      this.router.navigate(['/login'])
    })
  }
}
