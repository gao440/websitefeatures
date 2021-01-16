import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Chat} from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {
 // private dbPath = '/friendchats';
  chatsRef: AngularFirestoreCollection<Chat>;
  constructor(private chatDatastore: AngularFirestore) { 
    this.chatsRef = chatDatastore.collection("friendchats");
  }


  getAll(): AngularFirestoreCollection<Chat> {
    return this.chatsRef;
  }

  create(chat: Chat):any {
    this.chatsRef.add({...chat});
  }

  createbyjsondata(data:any) : Promise<any>{
    //let record = this.fireservices
    //      .collection("friend").get(data);
   // if (record === null) {
    return new Promise<any>((resolve, reject) =>{
      this.chatsRef
          .add(data)
          .then(res => {}, err => reject(err));
    });
    

   }
  update(id: string, data:any): Promise<void> {
    return this.chatsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.chatsRef.doc(id).delete();
  }

}
