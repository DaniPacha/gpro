import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  public url: string;

  constructor( private http: HttpClient ) {
    this.url = Global.url;
  }

  proyectoCreate(fProyecto: any) {
    return this.http.get(
      this.url + 'proyectos/proyecto_crear.jsp' ,
      {params: fProyecto},
    );
  }

  proyectoUpdate(fProyecto: any) {
    return this.http.get(
      this.url + 'proyectos/proyecto_crear.jsp' ,
      {params: fProyecto}
    );
  }

  proyectoDelete(fProyecto: any) {
    return this.http.get(
      this.url + 'proyectos/proyecto_crear.jsp' ,
      {params: fProyecto}
    );
  }


  proyectoRead(fProyecto: any) {
    return this.http.get(
      this.url + 'proyectos/proyecto.jsp' ,
      {params: fProyecto}
    );
  }

  proyectoActividades(fProyecto: any) {
    console.log(fProyecto);
    return this.http.get(
      this.url + 'proyectos/actividades_proyecto.jsp' ,
      {params: fProyecto}
    );
  }


  proyectosPendientes() {
    return this.http.get( this.url + 'proyectos/proyectos.jsp?estado=elaboracion' );
  }


  tipoProyecto() {
    return this.http.get( this.url + 'proyectos/lista_tipo_proyecto.jsp' );
  }

  unidadMedida() {
    return this.http.get( this.url + 'proyectos/unidad_medida.jsp' );
  }

  tipoProducto() {
    return this.http.get( this.url + 'proyectos/tipo_producto.jsp' );
  }

  listaAreasPersona() {
    return this.http.get( this.url + 'proyectos/lista_areas_persona.jsp' );
  }

  actividadRead( parametros: any) {
    return this.http.get(
      this.url + 'proyectos/actividad_detalle.jsp' ,
      {params: parametros}
    );
  }

  
  

}

