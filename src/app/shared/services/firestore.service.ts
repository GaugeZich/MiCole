import { Injectable } from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {Usuario} from 'src/app/models/usuario'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService{
    // Referenciamos colección en la base de datos
    private usuariosCollection: AngularFirestoreCollection<Usuario>

    // Constructor que inyecta AngularFirestore y AngularFireAuth
    constructor(private database: AngularFirestore, private afAuth: AngularFireAuth){
      // Inicia la colección de usuarios
      this.usuariosCollection=this.database.collection<Usuario>('usuarios')
    }

    // Función para agregar un usuario a firestore
    agregarUsuario(usuario: Usuario, id: string){
    return new Promise(async(resolve, reject) => {
      // Captura de los datos
      try{
        // Asigna el UID 
        usuario.uid = id;
        // Agrega el usuario a la colección
        const resultado = await this.usuariosCollection.doc(id).set(usuario);
        resolve(resultado) // Resuelve la promesa
      } catch (error){
        reject(error) // Rechaza la promesa
      }
    })
  }

  // Funcion para eliminar el autenticador de firestore
  async eliminarAutenticador(uid: string){
    try{
      // Obtiene el usuario conectado
      const user = await this.afAuth.currentUser;
      if(user){
        // Si hay un usuario conectado lo elimina
        await user.delete();
      }
    }catch(error){
      throw error; // Lanza un error
    }
  }
}