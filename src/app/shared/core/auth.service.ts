import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { switchMap, retry } from "rxjs/operators";
import { User } from "../models/user";
@Injectable()
export class AuthService {
  user$: Observable<User>;
  constructor(private afAuth: AngularFireAuth, private afS: AngularFirestore) {
    this.user$ = this.afAuth.authState;
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
