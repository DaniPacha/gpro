import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
      {params: fProyecto}
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
      this.url + 'proyectos/proyecto_crear.jsp' ,
      {params: fProyecto}
    );
  }

}

