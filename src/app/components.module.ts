import { NgModule } from '@angular/core';

import { NuevoProyectoComponent } from './pages/nuevo-proyecto/nuevo-proyecto.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidnavComponent } from './shared/sidnav/sidnav.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
    exports: [
        NuevoProyectoComponent,
        HeaderComponent,
        SidnavComponent,
        InicioComponent,
    ]
})

export class CompononetsModule {}

