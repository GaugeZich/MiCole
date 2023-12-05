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

  // Inicializo numero en 0 para que sea de type number y luego se pueda cambiar con las funciones
  numero = 0;

  constructor(
    private router: Router,
    private auth: AngularFireAuth
  ){
    // Carga la función que genera el numero rando para la carga de la Sube
    this.cargaDeSube();
  }

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

  /* 
  Funcion que genera un numero aleatorio con la funcion "generarNumeroAleatorio()"
  y lo asigna a numero para mostrarlo en la vista
  */
  cargaDeSube() {
    const nuevoNumero = this.generarNumeroAleatorio(10, 9999, 1);
    this.numero = nuevoNumero;
  }

  /*
  min: Valor mínimo del rango
  max: Valor maximo del rango
  decimales: Cantidad de decimales del numero
  Utiliza la funcion Math.random() para obtener un numero
  aleatorio con el rango y los decimales especificados
  */
  generarNumeroAleatorio(min: number, max: number, decimales: number): number {
    const factor = 10 ** decimales;
    return Math.floor(Math.random() * (max - min + 1) + min) / factor;
  }
}
