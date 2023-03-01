import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : Observable<firebase.default.User |null>
  userId:string = ''

  constructor(private angularFireAuth: AngularFireAuth) { 
    this.user = angularFireAuth.user
  }

  signUp(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
  }

  signIn(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
  }

  signOut() {
    localStorage.removeItem("role")
    return this.angularFireAuth.signOut()
  }

  forgotPassword(email:string){
    return this.angularFireAuth.sendPasswordResetEmail(email);
  }
}
