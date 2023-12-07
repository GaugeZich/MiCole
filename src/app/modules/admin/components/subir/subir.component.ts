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

  // Arreglo para la tarifa única 
  tarifaUnica: Tarifa[] = [];

  // Formulario para la información
  informacion = new FormGroup({
    titulo: new FormControl('',Validators.required),
    razon: new FormControl('',Validators.required)
  })

  // Recibe el valor del usuario e inicializado en 0
  tarifa = new FormGroup({
    tarifa: new FormControl(0,Validators.required)
  })

  constructor(
    // Importamos el servicio CRUD
    public servicioCrud: CrudService
  ){}

  // Función asyncrona para agregar la información
  async agregarInformacion(){
    if(this.informacion.valid){
      let nuevaInformacion: Informacion = {
        idInformacion: "",
        titulo: this.informacion.value.titulo!,
        razon: this.informacion.value.razon!
      }
      // Crea la información con el servicio CRUD
      await this.servicioCrud.crearInformacion(nuevaInformacion)
      .then(informacion =>{
        alert("La información se subio correctamente!")
      })
      .catch(error => {
        alert("Hubo un problema al subir la información \n"+error)
      })
    }
  }

  // Función para actualizar la tarifa
  actualizarTarifa(){
    if(this.tarifa.valid){
      let nuevaTarifa: Tarifa = {
        idTarifa: '1', // Siempre es ID 1 ya que es unico
        tarifa: this.tarifa.value.tarifa!
      }
      // Modifica la tarifa con el servicio CRUD
      this.servicioCrud.editarTarifa('1',nuevaTarifa)
      .then(tarifa => {
        alert("La tarifa ha sido modificada con exito")
      })
      .catch(error => {
        alert("No se pudo modificar la tarifa \n" +error)
      })
    }
  }
  /* Inicializa con ngOnInit y hace uso de obtenerTarifa del servicio para obtener la colección */
  ngOnInit(): void{
    // Obtiene la tarifa y la guarda para mostrarla en el HTML por interpolación
    this.servicioCrud.obtenerTarifa().subscribe(tarifa => {
      this.tarifaUnica = tarifa;
    })
  }
}
