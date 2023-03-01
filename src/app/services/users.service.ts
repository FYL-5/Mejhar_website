import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private angularFirestore: AngularFirestore, private _AuthService: AuthService) { }

  addNewUser(id: any, name: any , email:string) {
    return this.angularFirestore.doc('users/' + id).set({
      name , email
    })
  }

  getUserData() {
    return this.angularFirestore.collection<any>('users').doc(this._AuthService.userId).snapshotChanges()
  }

  getAllUser(){
    return this.angularFirestore.collection<any>('users').snapshotChanges()
  }


  addToService(data:any){
    return this.angularFirestore.collection(`users/${this._AuthService.userId}/service`).add(data)
  }

  getServiceUser(){
    return this.angularFirestore.collection<any>(`users/${this._AuthService.userId}/service`).snapshotChanges()
  }
}
