import { Component } from '@angular/core';
import { Informacion } from 'src/app/models/informacion';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { Tarifa } from 'src/app/models/tarifa';

@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.css']
})
export class SubirComponent {
  // Creamos una coleccion que esta basada en la interfaz de información
  coleccionInformacion: Informacion[] = [];

  tarifaUnica: Tarifa[] = [];

  // Formulario
  informacion = new FormGroup({
    titulo: new FormControl('',Validators.required),
    razon: new FormControl('',Validators.required)
  })

  tarifa = new FormGroup({
    tarifa: new FormControl(1500,Validators.required)
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

  actualizarTarifa(){
    if(this.tarifa.valid){
      let nuevaTarifa: Tarifa = {
        idTarifa: '1',
        tarifa: this.tarifa.value.tarifa!
      }

      this.servicioCrud.editarTarifa(this.tarifaUnica, nuevaTarifa)
      .then(tarifa => {
        alert("La tarifa ha sido modificada con exito")
      })
      .catch(error => {
        alert("No se pudo modificar la tarifa \n" +error)
      })
    }
  }
}
