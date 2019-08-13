import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../../services/proyecto.service';


@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {
  actividades: any[] = [];
  loadingActividad = false;
  proyecto: any[] = [];
  loadingProyecto = true;
  linkActividad = '/nuevo-proyecto/detalle-actividad';
  tipoVisualizacion: any[] = ['Tarjetas', 'Tarjetas-Horozon', 'Lista-Full'];
  @Input() gp_id: any;


  constructor( private sProyecto: ProyectoService, private router: ActivatedRoute ) {
    this.router.params.subscribe( parametro => {
      // console.log( parametro );
      this.gp_id = parametro;
    });

    this.sProyecto.proyectoActividades( this.gp_id )
      .subscribe( (data: any) => {
        console.log('Actividades Proyecto:');
        console.log(data);
        if ( data.status === 200 ) {
        this.loadingActividad = true;
        this.actividades = data.data;
        } else {
          console.log( data.message );
        }
      });

    this.sProyecto.proyectoRead( this.gp_id )
    .subscribe( (data: any) => {
      console.log('ProyectoRead:');
      console.log(data);
      if ( data.status === 200 ) {
        this.loadingProyecto = true;
        this.proyecto = data.data;
      } else {
        console.log( data.message );
      }
    });

  }

  ngOnInit() {
  }

}
