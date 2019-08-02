import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MenubarModule, InputTextModule, ButtonModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ AuthService, AuthGuard ]
})
export class AppModule { }
