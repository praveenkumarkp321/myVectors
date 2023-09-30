import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VectorSky1Component } from './vector-sky1/vector-sky1.component';

const routes: Routes = [
  // { path: '', component: VectorSky1Component }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
