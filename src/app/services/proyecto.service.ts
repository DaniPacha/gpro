import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {



  constructor( private http: HttpClient ) { }

  proyectoCreate(fProyecto: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'my-auth-token'
      })
    };

    console.log(fProyecto);
    return this.http.post(
      'http://pachamora.develop/academico/gpro-api/v1/proyectos/proyecto_crear.jsp' ,
      fProyecto,
      httpOptions
    );
  }



}

