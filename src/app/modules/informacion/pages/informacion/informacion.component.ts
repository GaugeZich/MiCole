import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Tarifa } from 'src/app/models/tarifa';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  // Variable para el sidebar
  opened = false;

  // Arreglo que guardara la tarifa
  tarifaUnica: Tarifa[] = [];

  constructor(
    // Importaciones de los servicios
    public servicioCrud: CrudService,
    private router: Router,
    private auth: AngularFireAuth
  ){}

  // ngOnInit: Se inicializa al abrir el componente 
  ngOnInit(): void{
    // Obtenemos la tarifa y la guardamos dentro de tarifaUnica para mostrarla en el HTML por interpolación
    this.servicioCrud.obtenerTarifa().subscribe(tarifa => {
      this.tarifaUnica = tarifa;
    })
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
}
