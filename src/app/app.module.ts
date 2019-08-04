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

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '.././environments/environment';
import { AppService } from './app.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    MenubarModule, 
    InputTextModule, 
    ButtonModule, 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireStorageModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ AuthService, AuthGuard, AppService ]
})
export class AppModule { }
