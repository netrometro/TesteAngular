import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User {
  matricula: string;
  realizacao: string;
  idade: number;
}

@Injectable()
export class AppService {

  constructor(private afs: AngularFirestore) { }

  listUsers(): Observable<User[]> {
    return this.afs.collection<User>('individuos').valueChanges();
  }

}