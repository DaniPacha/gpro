import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterializeModule } from '@samuelberthe/angular2-materialize';
// import { MasonryModule } from 'angular2-masonry';
import { ChartsModule } from 'ng2-charts';

import { NuevoProyectoComponent } from './pages/nuevo-proyecto/nuevo-proyecto.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidnavComponent } from './shared/sidnav/sidnav.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoProyectoComponent,
    HeaderComponent,
    SidnavComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
