import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  proyectos: any[] = [];
  loading: boolean;

  constructor( private router: Router, private sProyecto: ProyectoService ) {

    this.loading = true;
    this.sProyecto.proyectosPendientes()
        .subscribe( (data: any) => {
          this.loading = false;
          this.proyectos = data.data;

        });
  }

  ngOnInit() {
  }

}
