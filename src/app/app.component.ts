import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { MenuItem } from 'primeng/api';

import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  itens: Observable<any[]>;

  items: MenuItem[];
  username: string;

  constructor(
    private authService: AuthService,
    private db: AngularFirestore) {
      this.itens = this.db.collection('individuos').valueChanges();
  }

  ngOnInit() {
    this.items = 
    [ 
      { label: 'Page 1', routerLink: ['/page1'] },
      { label: 'Page 2', routerLink: ['/page2'] },
      { label: 'Page 3', routerLink: ['/page3'] },
      { label: 'Page 4', routerLink: ['/page4'] },
    ];
  }

  login() {
    this.authService.authenticate(this.username);
  }
}
