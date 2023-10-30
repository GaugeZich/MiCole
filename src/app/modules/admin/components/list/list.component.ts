import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Informacion } from 'src/app/models/informacion';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  coleccionInformacion: Informacion[] = [];

  informacionSeleccionada!: Informacion;

  constructor(
    public servicioCrud : CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerInformacion().subscribe(informacion => {
      this.coleccionInformacion = informacion
    })
  }

  borrarInformacion(){
    this.servicioCrud.eliminarInformacion(this.informacionSeleccionada.idInformacion)
    .then(res => {
      alert("La información ha sido elminada correctamente!");
    })
    .catch(error => {
      alert("Hubo un error al eliminar la información: \n"+error)
    })
  }
}
