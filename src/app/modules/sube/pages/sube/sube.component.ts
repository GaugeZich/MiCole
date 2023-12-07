import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-sube',
  templateUrl: './sube.component.html',
  styleUrls: ['./sube.component.css']
})
export class SubeComponent implements OnInit{
  // Variable para el sidebar
  opened = false;

  // Inicializo numero en 0 para que sea de type number y luego se pueda cambiar con las funciones
  numero = 0;

  // Arreglo que almacenará la colección de usuarios
  coleccionUsuarios: Usuario[] = [];

  // Variable que representa al usuario seleccionado
  usuarioSeleccionado!: Usuario;

  // Variable para guardar la información del usuario
  info_cuenta: Usuario | undefined;

  constructor(
    // Importaciones de los servicios
    public servicioCrud: CrudService,
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
  // ngOnInit: Se inicializa al abrir el componente
  async ngOnInit(): Promise<void>{
    /*
    Obtiene al usuario conectado y recorre todo los usuarios
    comparando sus ID's para encontrar el usuario conectado
    */
    this.auth.currentUser.then((userLogeado) => {
      this.servicioCrud.obtenerUsuario().subscribe(usuarios => {
        if (userLogeado) {
          // Guarda toda la información de ese usuario conectado
          this.info_cuenta = usuarios.find(usuario => usuario.uid === userLogeado.uid);
        }
      })
    })    
  }
}
