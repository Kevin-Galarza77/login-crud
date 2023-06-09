import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  item$: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const carsCollection = collection(this.firestore, 'cars'); // Obtener la referencia a la colección "cars"
    this.item$ = collectionData(carsCollection, { idField: 'id' }); // Obtener un Observable de los documentos con el campo "id" incluido
  }

  getCars(){
    return this.item$;
  }

  createCar(carData: any): Promise<void> {
    const carsCollection: any = collection(this.firestore, 'cars');
    return setDoc(doc(carsCollection), carData);
  }

  updateCar(carId: string, carData: any): Promise<void> {
    const carDoc = doc(this.firestore, 'cars', carId);
    return updateDoc(carDoc, carData);
  }

  deleteCar(carId: string): Promise<void> {
    const carDoc = doc(this.firestore, 'cars', carId);
    return deleteDoc(carDoc);
  }

}
