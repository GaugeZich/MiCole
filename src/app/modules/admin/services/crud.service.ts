import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Informacion } from 'src/app/models/informacion';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private informacionCollection: AngularFirestoreCollection<Informacion>

  constructor(private database: AngularFirestore) {
    this.informacionCollection = database.collection('informacion')
  }

  // CRUD -> Funcion para crear una información
  crearInformacion(informacion: Informacion){
    return new Promise(async(res,rej) => {
      try{
        // Creamos una constante en la que guardaremos una nueva ID
        const idInformacion = this.database.createId();

        // Asignamos la ID a su atributo correspondiente
        informacion.idInformacion = idInformacion;

        const resultado = await this.informacionCollection.doc(idInformacion).set(informacion)

        res(resultado)
      }
      catch(error){
        rej(error)
      }
    })
  }

}
