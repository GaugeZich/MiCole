import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Informacion } from 'src/app/models/informacion';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  // Creamos una coleccion que esta basada en la interfaz de información
  coleccionInformacion: Informacion[] = [];

  // Variable para guardar la información seleccionada
  informacionSeleccionada!: Informacion;

  constructor(
    // Importamos el servicio CRUD
    public servicioCrud : CrudService
  ){}

  // ngOnInit: Se inicializa al abrir el componente
  ngOnInit(): void{
    // Obtiene la información y la guarda en la colección
    this.servicioCrud.obtenerInformacion().subscribe(informacion => {
      this.coleccionInformacion = informacion
    })
  }

  // Confirm -> Pop-up para pregunta si esta seguro
  // Guarda la informacion seleccionada para borrar la información
  confirm(informacionSeleccionada: Informacion){
    this.informacionSeleccionada = informacionSeleccionada
    // Si la respuesta es afirmativa (verdad/true) entonces borrara la información llamando a la función
    if(confirm ("¿Está seguro?") === true){
      this.borrarInformacion()
    }
  }

  // Función para borrar la información 
  borrarInformacion(){
    // Borra la información con el servicio CRUD
    this.servicioCrud.eliminarInformacion(this.informacionSeleccionada.idInformacion)
    .then(res => {
      alert("La información ha sido elminada correctamente!");
    })
    .catch(error => {
      alert("Hubo un error al eliminar la información: \n"+error)
    })
  }

}