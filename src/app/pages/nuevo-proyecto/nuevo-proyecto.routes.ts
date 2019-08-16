import { Routes } from '@angular/router';

import { PendientesComponent } from './pendientes.component';
import { CrearProyectoComponent } from './crear-proyecto.component';
import { DetalleProyectoComponent } from './detalle-proyecto.component';
import { NuevaActividadComponent } from './nueva-actividad.component';
import { DetalleActividadComponent } from './detalle-actividad.component';


export const NUEVO_PROYECTO_ROUTES: Routes = [
    { path: 'pendientes', component: PendientesComponent },
    { path: 'crear-proyecto', component: CrearProyectoComponent },
    { path: 'detalle-proyecto/:proyecto_id', component: DetalleProyectoComponent },
    { path: 'nueva-actividad/:proyecto_id', component: NuevaActividadComponent },
    { path: 'detalle-actividad/:actividad_id', component: DetalleActividadComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'pendientes'}
];
