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

  // CRUD para información:

  // CRUD -> Función para crear una información
  crearInformacion(informacion: Informacion){
    return new Promise(async(res,rej) => {
      try{
        // Creamos una constante en la que guardaremos una nueva ID
        const idInformacion = this.database.createId();

        // Asignamos la ID a su atributo correspondiente
        informacion.idInformacion = idInformacion;

        // Agrega la información en la colección de firestore
        const resultado = await this.informacionCollection.doc(idInformacion).set(informacion)

        res(resultado)
      }
      catch(error){
        rej(error)
      }
    })
  }
  // CRUD -> Función para obtener información
  /*
    snapshotChanges -> Toma captura del estado de los datos
    pipe -> funciona como tuberia, retorna el nuevo arreglo
    map -> "mapea" o recorre esa nueva información
    a -> resguarda la nueva información y la envia
  */
  obtenerInformacion(){
    return this.informacionCollection.snapshotChanges().pipe(map(Action => Action.map(a => a.payload.doc.data())))
  }

  // CRUD -> Función para eliminar una información
  eliminarInformacion(idInformacion: string){
    return new Promise((res,rej) =>{
      try{
        // Elimina la información utilizando .delete()
        const resp = this.informacionCollection.doc(idInformacion).delete()

        res(resp)
      }
      catch(error){
        rej(error)
      }
    })

  }

  // CRUD para usuarios:

  // CRUD -> Función para crear un usuario
  crearUsuario(usuario: Usuario){
    return new Promise(async(res,rej) => {
      try{
        // Genera un ID para el usuario
        const idUsuario = this.database.createId();

        // Lo asigna a UID
        usuario.uid = idUsuario;

        // Agrega el usuario a firestore
        const resultado = await this.usuariosCollection.doc(idUsuario).set(usuario)

        res(resultado)
      }
      catch(error){
        rej(error)
      }
    })
  }

  // CRUD -> Función para obtener un usuario
  /*
    snapshotChanges -> Toma captura del estado de los datos
    pipe -> funciona como tuberia, retorna el nuevo arreglo
    map -> "mapea" o recorre esa nueva información
    a -> resguarda la nueva información y la envia
  */
  obtenerUsuario(){
    return this.usuariosCollection.snapshotChanges().pipe(map(Action => Action.map(a => a.payload.doc.data())))
  }

  // CRUD -> Función para editar un usuario
  editarUsuario(uid: string, nuevaData: Usuario){
    // Actualiza los datos del usuario en la colección con la funcion .update
    return this.database.collection('usuarios').doc(uid).update(nuevaData);
  }
  
  // CRUD -> Función para eliminar un usuario
  eliminarUsuario(uid: string){
    return new Promise((resolve, reject) => {
      try{
        // Elimina un usuario por el ID utilizando el metodo .delete
        const resp = this.usuariosCollection.doc(uid).delete()
        resolve(resp)
      }
      catch(error){
        reject(error)
      }
    })
  }

  // CRUD para tarifa:

  // CRUD -> Función para obtener la tarifa
    /*
    snapshotChanges -> Toma captura del estado de los datos
    pipe -> funciona como tuberia, retorna el nuevo arreglo
    map -> "mapea" o recorre esa nueva información
    a -> resguarda la nueva información y la envia
  */
  obtenerTarifa(){
    return this.tarifaUnico.snapshotChanges().pipe(map(Action => Action.map(a => a.payload.doc.data())))
  }

  // CRUD -> Función para editar la tarifa
  editarTarifa(tarifaUnico: '1', nuevaData: Tarifa){
    // Actualiza los datos de la tarifa en la colección con la funcion .update
    return this.database.collection('tarifa').doc(tarifaUnico).update(nuevaData)
  }
}
