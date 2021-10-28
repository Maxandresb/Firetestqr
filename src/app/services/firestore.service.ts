import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( public  Firestore:AngularFirestore,
     
  ) { }

  crearDocuemt<tipo>( data: tipo ,enlace:string){
    const itemsCollection: AngularFirestoreCollection<tipo>=
                          this.Firestore.collection<tipo>(enlace);
    return itemsCollection.add(data)
  }
  
  deleteDocument(){}

  getDocument(){}

  editDocuemt(){

  }
  getDocumentChanges <tipo>(enlace:string):Observable<tipo>{
    const itemDoc:AngularFirestoreDocument<tipo>= this.Firestore.doc<tipo>(enlace);
    return itemDoc.valueChanges();
  }

  getCollectionChanges<tipo>(enlace :string):Observable<tipo[]>{
    const itemsCollection: AngularFirestoreCollection<tipo>=
            this.Firestore.collection<tipo>(enlace);
            return itemsCollection.valueChanges();
  }
}
