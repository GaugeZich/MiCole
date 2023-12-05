import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  // Variable para el sidebar
  opened = false;
  
  constructor(
    // Importaciones de servicios
    public servicioCrud: CrudService,
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
