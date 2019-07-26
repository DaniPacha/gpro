import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  proyectos: any[] = [];
  loading: boolean;

  constructor( public sProyectos: ProyectoService, private router: Router ) {
    this.loading = true;
    this.sProyectos.proyectosPendientes()
        .subscribe( (data: any) => {
          if( data.status == 200 ) {
            this.loading = false;
            this.proyectos = data.data;
            console.log('Cargó data en pendientes');
          } else {
            console.log('no encontró ningun proyecto en pendiente');
            this.router.navigate(['nuevo-proyecto/crear-proyecto']);
          }

        });
   }

  ngOnInit() {
  }

}
