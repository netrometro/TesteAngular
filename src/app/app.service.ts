import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User {
  matricula: string;
  realizacao: string;
  idade: number;
}

@Injectable()
export class AppService {

  private userDoc: AngularFirestoreDocument<User>;

  constructor(private afs: AngularFirestore) { }

  listUsers(): Observable<User[]> {
    return this.afs.collection<User>('individuos').valueChanges();
  }

  getUser(id: string): Observable<User> {
    this.userDoc = this.afs.doc<User>('individuos/' + id);
    return this.userDoc.valueChanges();
  }
  
  update(user: User) {
    this.userDoc.update(user);
  }
}