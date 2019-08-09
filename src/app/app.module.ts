import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

import { APP_ROUTING } from './app-routes';
import { AppComponent } from './app.component';

import { MaterializeModule } from '@samuelberthe/angular2-materialize';
// import { MasonryModule } from 'angular2-masonry';
import { ChartsModule } from 'ng2-charts';


// import { CompononetsModule } from './components.module';



import { HeaderComponent } from './shared/header/header.component';
import { SidnavComponent } from './shared/sidnav/sidnav.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoProyectoComponent } from './pages/nuevo-proyecto/nuevo-proyecto.component';

import { CrearProyectoComponent } from './pages/nuevo-proyecto/crear-proyecto.component';
import { PendientesComponent } from './pages/nuevo-proyecto/pendientes.component';
import { NuevaActividadComponent } from './pages/nuevo-proyecto/nueva-actividad.component';
import { DetalleProyectoComponent } from './pages/nuevo-proyecto/detalle-proyecto.component';
import { DetalleActividadComponent } from './pages/nuevo-proyecto/detalle-actividad.component';
import { ActividadTarjetaComponent } from './components/actividad-tarjeta/actividad-tarjeta.component';
import { ActividadTarjetaHorizontalComponent } from './components/actividad-tarjeta-horizontal/actividad-tarjeta-horizontal.component';



@NgModule({
  declarations: [
    AppComponent,
    NuevoProyectoComponent,
    HeaderComponent,
    SidnavComponent,
    InicioComponent,
    PendientesComponent,
    DetalleProyectoComponent,
    NuevaActividadComponent,
    DetalleActividadComponent,
    CrearProyectoComponent,
    ActividadTarjetaComponent,
    ActividadTarjetaHorizontalComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    MaterializeModule,
    // MasonryModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
