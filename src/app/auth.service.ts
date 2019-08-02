import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  done: boolean;

  constructor(private router: Router) { }

  authenticate(username: string) {
    if (username == "teste") {
      console.log(username, ' realizou o teste!');
      this.done = true;
      this.router.navigate(['page2']);
    } else {
      console.log(username, ' não realizou!');
      this.done = false;
    }
  }

  isDone() {
    return this.done;
  }
}