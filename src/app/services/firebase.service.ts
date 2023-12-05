import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  addContactForm(data: any): Promise<any> {
    return this.firestore.collection('contactForms').add(data);
  }
}
