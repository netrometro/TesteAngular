import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MenuItem } from 'primeng/api';

import { AuthService } from './auth.service';
import { AppService } from './app.service';

export interface User {
  matricula: string;
  realizacao: string;
  idade: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  users: Observable<User[]>;

  items: MenuItem[];

  username: string;

  constructor(
    private authService: AuthService,
    private appService: AppService) {

    this.users = appService.listUsers();
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
