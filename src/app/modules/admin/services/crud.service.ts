import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Informacion } from 'src/app/models/informacion';
import { map } from 'rxjs/operators'
import { Usuario } from 'src/app/models/usuario';
import { Tarifa } from 'src/app/models/tarifa';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Declaración de colección para información:
  private informacionCollection: AngularFirestoreCollection<Informacion>

  // Declaración de colección para usuarios
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  // Declaración para tarifa
  private tarifaUnico: AngularFirestoreCollection<Tarifa>

  constructor(private database: AngularFirestore) {
    this.informacionCollection = database.collection('informacion')
    this.usuariosCollection = database.collection('usuarios')
    this.tarifaUnico = database.collection('tarifa')
  }

  // CRUD para informacion:

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

    // snapshotChanges -> Toma captura del estado de los datos
    // pipe -> funciona como tuberia, retorna el nuevo arreglo
    // map -> "mapea" o recorre esa nueva información
    // a -> resguarda la nueva información y la envia
  obtenerInformacion(){
    return this.informacionCollection.snapshotChanges().pipe(map(Action => Action.map(a => a.payload.doc.data())))
  }

  eliminarInformacion(idInformacion: string){
    return new Promise((res,rej) =>{
      try{
        const resp = this.informacionCollection.doc(idInformacion).delete()

        res(resp)
      }
      catch(error){
        rej(error)
      }
    })

  }

  // CRUD para usuarios:

  crearUsuario(usuario: Usuario){
    return new Promise(async(res,rej) => {
      try{
        const idUsuario = this.database.createId();

        usuario.uid = idUsuario;

        const resultado = await this.usuariosCollection.doc(idUsuario).set(usuario)

        res(resultado)
      }
      catch(error){
        rej(error)
      }
    })
  }

  obtenerUsuario(){
    return this.usuariosCollection.snapshotChanges().pipe(map(Action => Action.map(a => a.payload.doc.data())))
  }

  editarUsuario(uid: string, nuevaData: Usuario){
    return this.database.collection('usuarios').doc(uid).update(nuevaData);
  }
  
  eliminarUsuario(uid: string){
    return new Promise((resolve, reject) => {
      try{
        const resp = this.usuariosCollection.doc(uid).delete()
        resolve(resp)
      }
      catch(error){
        reject(error)
      }
    })
  }

  obtenerTarifa(){
    return this.tarifaUnico.snapshotChanges().pipe(map(Action => Action.map(a => a.payload.doc.data())))
  }

  editarTarifa(tarifaUnico: '1', nuevaData: Tarifa){
    return this.database.collection('tarifa').doc(tarifaUnico).update(nuevaData)
  }
}
