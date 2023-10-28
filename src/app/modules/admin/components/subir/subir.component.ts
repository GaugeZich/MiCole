import { Component } from '@angular/core';
import { Informacion } from 'src/app/models/informacion';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.css']
})
export class SubirComponent {
  // Creamos una coleccion que esta basada en la interfaz de información
  coleccionInformacion: Informacion[] = [];

  // Formulario
  informacion = new FormGroup({
    titulo: new FormControl('',Validators.required),
    razon: new FormControl('',Validators.required)
  })

  constructor(
    public servicioCrud: CrudService
  ){}

  async agregarInformacion(){
    if(this.informacion.valid){
      let nuevaInformacion: Informacion = {
        idInformacion: "",
        titulo: this.informacion.value.titulo!,
        razon: this.informacion.value.razon!
      }

      await this.servicioCrud.crearInformacion(nuevaInformacion)
      .then(informacion =>{
        alert("La información se subio correctamente!")
      })
      .catch(error => {
        alert("Hubo un problema al subir la información \n"+error)
      })
    }
  }
}
