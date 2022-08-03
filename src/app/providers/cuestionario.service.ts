import { Injectable } from '@angular/core';

import { Cuestionario } from '../interface/cuestionario.interface';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  private itemsCollection!: AngularFirestoreCollection<Cuestionario>;

  constructor( private afs: AngularFirestore ) {

  }

  enviarCuestionario(nombre: string, documento: string, clasificacion: string){
    let cuestionario: Cuestionario = {
      nombre: nombre,
      documento: documento,
      clasificacion: clasificacion,
      fecha: new Date()
    }

    return this.itemsCollection.add(cuestionario);
  }



  cargarCuestionarios(){
    this.itemsCollection = this.afs.collection<Cuestionario>('mbti', ref => ref.orderBy('fecha', 'desc').limit(5));
  }

}
