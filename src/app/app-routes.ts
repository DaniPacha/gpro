import { Routes, RouterModule } from '@angular/router';


import { InicioComponent } from './pages/inicio/inicio.component';

import { NuevoProyectoComponent } from './pages/nuevo-proyecto/nuevo-proyecto.component';
import { NUEVO_PROYECTO_ROUTES } from './pages/nuevo-proyecto/nuevo-proyecto.routes';



const APP_ROUTES: Routes = [
  {path: 'inicio', component: InicioComponent},
  {
    path: 'nuevo-proyecto',
    component: NuevoProyectoComponent,
    children: NUEVO_PROYECTO_ROUTES
  },
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
