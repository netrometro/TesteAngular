import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User {
  matricula: string;
  realizacao: string;
  idade: number;
}

@Injectable()
export class AppService {

  private userDoc: AngularFirestoreDocument<User>;
  private usersCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore) { }

  listUsers(): Observable<User[]> {
    return this.afs.collection<User>('individuos').valueChanges();
  }

  listUsers2(): Observable<User[]> {
    this.usersCollection = this.afs.collection<User>('individuos');
    return this.usersCollection.valueChanges();
  }
  
  add(user: User) {
    this.usersCollection.add(user);
  }

  getUser(id: string): Observable<User> {
    this.userDoc = this.afs.doc<User>('individuos/' + id);
    return this.userDoc.valueChanges();
  }
  
  update(user: User) {
    this.userDoc.update(user);
  }
}