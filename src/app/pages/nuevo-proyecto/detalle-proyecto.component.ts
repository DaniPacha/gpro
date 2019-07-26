import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../../services/proyecto.service';


@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {
  id: any;
  constructor( private sProyecto: ProyectoService, private router: ActivatedRoute ) {
    this.router.params.subscribe( parametro => {
      console.log( parametro );
      this.id = parametro;
    });

   }

  ngOnInit() {
  }

}
