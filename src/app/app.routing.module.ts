import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component, canActivate: [AuthGuard] },
  { path: 'page3', component: Page3Component, canActivate: [AuthGuard] },
  { path: 'page4', component: Page4Component, canActivate: [AuthGuard] },
]


@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes) ],
  exports:      [ RouterModule ],
  declarations: [ Page1Component, Page2Component, Page3Component, Page4Component ],
  bootstrap:    [ ]
})
export class AppRoutingModule {

}