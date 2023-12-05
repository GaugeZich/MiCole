import { Component } from '@angular/core';
import { Informacion } from 'src/app/models/informacion';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent {
  // Arreglo que guardara las informaciones
  coleccionInformacion: Informacion[] = [];

  constructor(
    // Importación del servicio CRUD
    public servicioCrud : CrudService
  ){}
  // ngOnInit: Se inicializa al abrir el componente
  ngOnInit(): void{
    // Obtenemos las informaciones y la guardamos en la colección para luego mostrarlas en el cuadro
    this.servicioCrud.obtenerInformacion().subscribe(informacion => {
      this.coleccionInformacion = informacion
    })
  }
}
