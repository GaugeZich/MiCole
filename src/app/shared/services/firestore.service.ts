import { Injectable } from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {Usuario} from 'src/app/models/usuario'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService{
    // referenciamos colección en la base de datos
    private usuariosCollection: AngularFirestoreCollection<Usuario>

    constructor(private database: AngularFirestore, private afAuth: AngularFireAuth){
        this.usuariosCollection=this.database.collection<Usuario>('usuarios')
    }

    
    agregarUsuario(usuario: Usuario, id: string){
    return new Promise(async(resolve, reject) => {
      //capturamos los datos 
      try{
        usuario.uid = id;
        const resultado = await this.usuariosCollection.doc(id).set(usuario);
        resolve(resultado)
      } catch (error){
        reject(error)
      }
    })
  }

  // Funcion para eliminar el autenticador de firestore
  async eliminarAutenticador(uid: string){
    try{
      const user = await this.afAuth.currentUser;
      if(user){
        await user.delete();
      }
    }catch(error){
      throw error;
    }
  }
}