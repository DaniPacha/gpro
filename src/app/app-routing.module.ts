import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoProyectoComponent } from './pages/nuevo-proyecto/nuevo-proyecto.component';

const ROUTES: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'nuevo-proyecto', component: NuevoProyectoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
