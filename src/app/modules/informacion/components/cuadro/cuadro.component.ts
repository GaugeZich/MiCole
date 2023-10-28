import { Component } from '@angular/core';
import { Informacion } from 'src/app/models/informacion';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent {

  coleccionInformacion: Informacion[] = [];

  constructor(
    public servicioCrud : CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerInformacion().subscribe(informacion => {
      this.coleccionInformacion = informacion
    })
  }
}
