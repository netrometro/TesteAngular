import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MenubarModule, InputTextModule, ButtonModule ],
  declarations: [ AppComponent, Page1Component, Page2Component, Page3Component, Page4Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
