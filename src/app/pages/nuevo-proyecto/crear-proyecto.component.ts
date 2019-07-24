import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProyectoService } from '../../services/proyecto.service';
import { Global } from '../../global';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-prouecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})


export class NuevoComponent implements OnInit {

  settingDatePicker: any;
  fProyecto: FormGroup;

  proyectoBlanco = {
    nombre_proyecto: '',
    nombre_corto: '',
    descripcion_proyecto: '',
    tipo_proyecto: '',
    foto_proyecto: '',
    // fecha_inicio_proyecto: '',
    // fecha_fin_proyecto: '',
  };

  constructor( private sProyecto: ProyectoService) {
    this.settingDatePicker = Global.settingDatePicker;
    this.fProyecto = new FormGroup({
      nombre_proyecto:        new FormControl('', [Validators.required, Validators.minLength(14)]),
      nombre_corto:           new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      descripcion_proyecto:   new FormControl('', [Validators.required, Validators.minLength(24)]),
      tipo_proyecto:          new FormControl('', [Validators.required]),
      foto_proyecto:          new FormControl('', ),
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
      console.log('antes de llamar al servicio');
      this.sProyecto.proyectoCreate( this.fProyecto.value ).
        subscribe( resp => {
          console.log(resp);
        });
    }

    // this.resetear();
  }

  // Resetear Datos:
  resetear() {
    this.fProyecto.reset(this.proyectoBlanco);
  }
}
