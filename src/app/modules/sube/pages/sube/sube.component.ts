import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sube',
  templateUrl: './sube.component.html',
  styleUrls: ['./sube.component.css']
})
export class SubeComponent {
  opened = false;

  numero = 0;

  constructor(
    private router: Router,
    private auth: AngularFireAuth
  ){
    this.cargaDeSube();
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

  cargaDeSube() {
    const nuevoNumero = this.generarNumeroAleatorio(10, 9999, 1);
    this.numero = nuevoNumero;
  }

  generarNumeroAleatorio(min: number, max: number, decimales: number): number {
    const factor = 10 ** decimales;
    return Math.floor(Math.random() * (max - min + 1) + min) / factor;
  }
}
