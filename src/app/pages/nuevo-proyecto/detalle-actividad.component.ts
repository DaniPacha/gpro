import { Component, OnInit, Input } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-actividad',
  templateUrl: './detalle-actividad.component.html',
  styleUrls: ['./detalle-actividad.component.css']
})
export class DetalleActividadComponent implements OnInit {
  @Input() paramsActividad: any;
  actividad: any;
  loadingAcividad = false;
  presupuestos: any[] = [1, 2, 3, 4, 5, 6];
  loadingPresupuestos = false;

  nuevoDetallePresupuesto = false;
  nuevoFondoPresupuesto = false;

  linkActividad = '/nuevo-proyecto/detalle-actividad';

  constructor( private sProyecto: ProyectoService, private router: ActivatedRoute ) {
    this.router.params.subscribe( parametro => {
      // console.log( parametro );
      this.paramsActividad = parametro;
    });

    this.sProyecto.actividadRead( this.paramsActividad )
    .subscribe( (data: any) => {
      console.log('ActividadRead:');
      console.log(data);
      if ( data.status === 200 ) {
        this.loadingAcividad = true;
        this.actividad = data.data;
      } else {
        console.log( data.message );
      }
    });

  }

  ngOnInit() {
  }

}
