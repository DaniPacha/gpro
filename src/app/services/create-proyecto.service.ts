import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateProyectoService {

  constructor( private http: HttpClient ) { }

  getProyectos() {
    return this.http.get( 'http://pachamora.develop/academico/gpro-api/v1/proyectos/proyecto_crear.jsp' );
  }

}

