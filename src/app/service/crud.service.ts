import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(public fireservices:AngularFirestore ) {

   }

   create_newfriend(data:any) : Promise<any>{
    //let record = this.fireservices
    //      .collection("friend").get(data);
   // if (record === null) {
    return new Promise<any>((resolve, reject) =>{
      this.fireservices
          .collection("friend")
          .add(data)
          .then(res => {}, err => reject(err));
    });
    

   }

   exist(data:any) {

    return new Promise<any>((resolve, reject) =>{
      this.fireservices
          .collection("friend")
          .add(data)
          .then(res => {}, err => reject(err));
    });

   }
}
