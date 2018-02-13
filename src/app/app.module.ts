import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universalAirApp' }),
    RouterModule.forRoot([
      {
        path: 'lazy',
        loadChildren: './lazy/lazy.module#LazyModule'
      }
    ], {
      initialNavigation: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
