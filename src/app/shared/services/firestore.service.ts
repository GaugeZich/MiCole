import { Injectable } from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {Usuario} from 'src/app/models/usuario'; 

@Injectable({
    providedIn: 'root'
})
export class FirestoreService{
    private usuariosCollection: AngularFirestoreCollection<Usuario>
    constructor(private database: AngularFirestore){
        this.usuariosCollection=this.database.collection<Usuario>('usuarios')
    }
    agregarUsuario(){}
}