import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProyectoService } from '../../services/proyecto.service';
import { Router } from '@angular/router';
import { Global } from '../../global';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})


export class CrearProyectoComponent implements OnInit {

  settingDatePicker: any;
  fProyecto: FormGroup;
  tipoProyecto: any[] = [];
  cargaTipoProyecto = false;
  areasPersona: any[] = [];
  cargaAreasPersona = false;

  proyectoBlanco = {
    nombre_proyecto: '',
    nombre_corto: '',
    descripcion_proyecto: '',
    tipo_proyecto: '',
    foto_proyecto: '',
    // fecha_inicio_proyecto: '',
    // fecha_fin_proyecto: '',
  };

  constructor( public sProyecto: ProyectoService, private router: Router) {

    sProyecto.tipoProyecto()
      .subscribe( (data: any)  => {
        this.tipoProyecto = data.data;
        this.cargaTipoProyecto = true;

      } );

    sProyecto.listaAreasPersona()
      .subscribe( (data: any)  => {

        this.areasPersona = data.data;
        this.cargaAreasPersona = true;

      } );

    this.settingDatePicker = Global.settingDatePicker;
    this.fProyecto = new FormGroup({
      nombre_proyecto:        new FormControl('', [Validators.required, Validators.minLength(14)]),
      nombre_corto:           new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      descripcion_proyecto:   new FormControl('', [Validators.required, Validators.minLength(24)]),
      tipo_proyecto:          new FormControl('', [Validators.required]),
      foto_proyecto:          new FormControl('', ),
      areas_id:               new FormControl('', [Validators.required]),
      crear_actividad:        new FormControl('', ),
      // fecha_inicio_proyecto:  new FormControl('', [Validators.required]),
      // fecha_fin_proyecto:     new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {}

  guardarProyecto() {
    if ( this.fProyecto.invalid ) {
      console.log('error en Formulario');
      return;

    } else {
      let areas_id: any[] = [];
      areas_id = this.fProyecto.get('areas_id').value;

      this.fProyecto.get('areas_id').setValue(areas_id.join(';'));

      this.sProyecto.proyectoCreate( this.fProyecto.value ).
        subscribe( (data: any) => {
          console.log(data);
          if ( data.status ===  200 ) {
            this.router.navigate(['nuevo-proyecto/detalle-proyecto', data.data.proyecto_id]);
          } else {
            console.log( data.message );
          }

        });
    }

    // this.resetear();
  }

  // Resetear Datos:
  resetear() {
    this.fProyecto.reset(this.proyectoBlanco);
  }
}
