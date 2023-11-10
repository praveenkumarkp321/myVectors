import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VectorSky1Component } from './vector-sky1/vector-sky1.component';
import { VectorSky2Component } from './vector-sky2/vector-sky2.component';
import { VectorPandaComponent } from './vector-panda/vector-panda.component';

@NgModule({
  declarations: [
    AppComponent,
    VectorSky1Component,
    VectorSky2Component,
    VectorPandaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
