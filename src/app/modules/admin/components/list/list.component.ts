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

  // Confirm -> Pop-up para pregunta si esta seguro
  // Guarda la informacion seleccionada para borrar la información
  confirm(informacionSeleccionada: Informacion){
    this.informacionSeleccionada = informacionSeleccionada

    if(confirm ("¿Está seguro?") === true){
      this.borrarInformacion()
    }

    // let respuesta = confirm("¿Está seguro?")
    // if(respuesta){
    //   this.borrarInformacion()
    // }
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