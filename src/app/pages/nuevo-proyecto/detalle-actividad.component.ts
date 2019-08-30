import { Component, OnInit, Input } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Global } from '../../global';

@Component({
  selector: 'app-detalle-actividad',
  templateUrl: './detalle-actividad.component.html',
  styleUrls: ['./detalle-actividad.component.css']
})
export class DetalleActividadComponent implements OnInit {
  @Input() paramsActividad: any;
  actividad: any;
  loadingAcividad = false;

  settingDatePicker: any;

  fondoPresupuestario: any[] = [1, 2];
  loadingFondoPresupuestario = false;

  detallePresupuesto: any[] = [1, 2];
  loadingDetallePresupuesto = false;

  tipoProducto: any[] = [1, 2];
  loadingTipoProducto = false;

  unidadMedida: any[] = [1, 2];
  loadingUnidadMedida = false;

  listaPresupuestario = {
    ppto1: 'niguna',
    ppto2: 'ppto3',
    ppto3: 'ninguna'
  }; // se cargará aquí los datos de busqueda (Autoncomplete)


  fNuevoDetallePresupuesto: FormGroup;
  nuevoDetallePresupuesto = false;

  fNuevoFondoPresupuesto: FormGroup;
  nuevoFondoPresupuesto = false;

  NuevoFondoPresupuestoBlanco = {
    actividad_id: '',
    presupuesto_id: '',
    autofinanciado: '',
    importe: '',
    observaciones: ''
  };

  nuevoDetallePresupuestoBlanco = {
    actividad_id: '',
    detalle_prespuesto: '',
    tipoproducto_id: '',
    cantidad: '',
    unidadmedida_id: '',
    precio_unitario: '',
    lugar: '',
    persona_referencial: ''
  };



  constructor( private sProyecto: ProyectoService, private router: ActivatedRoute ) {

    this.settingDatePicker = Global.settingDatePicker;

    this.router.params.subscribe( parametro => {
      // console.log( parametro );
      this.paramsActividad = parametro;
    });

    this.sProyecto.unidadMedida()
    .subscribe( (data: any) => {
      console.log('Unidad de Medida:');
      console.log(data);
      if ( data.status === 200 ) {
        this.loadingUnidadMedida = true;
        this.unidadMedida = data.data;
      } else {
        console.log( data.message );
      }
    });

    this.sProyecto.tipoProducto()
    .subscribe( (data: any) => {
      console.log('Tipo de Producto:');
      console.log(data);
      if ( data.status === 200 ) {
        this.loadingTipoProducto = true;
        this.tipoProducto = data.data;
      } else {
        console.log( data.message );
      }
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

    this.fNuevoDetallePresupuesto = new FormGroup({
      actividad_id:                 new FormControl(''),
      detalle_prespuesto:           new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(200)]),
      tipoproducto_id:              new FormControl('', [Validators.required, Validators.minLength(24)]),
      cantidad:                     new FormControl('', [Validators.required]),
      unidadmedida_id:              new FormControl('', ),
      precio_unitario:              new FormControl('', [Validators.required]),
      lugar:                        new FormControl('', ),
      persona_referencial:          new FormControl('', ),
    });

    this.fNuevoFondoPresupuesto = new FormGroup({
      actividad_id:               new FormControl(''),
      presupuesto_id:             new FormControl(''),
      autofinanciado:             new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      importe:                    new FormControl('', [Validators.required, Validators.minLength(24)]),
      observaciones:              new FormControl('', [Validators.required]),
    });

  }

  ngOnInit() {
  }

  buscarPresupuesto( valor: string ) {
    console.log('buscando presupuesto.');
    
  }

}
