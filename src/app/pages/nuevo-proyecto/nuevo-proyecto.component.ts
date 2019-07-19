import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  fProyecto: FormGroup;

  proyectoBlanco = {
    nombre_proyecto: '',
    nombre_corto: '',
    descripcion_proyecto: '',
    tipo_proyecto: '',
    foto_proyecto: '',
    fecha_inicio_proyecto: '',
    fecha_fin_proyecto: '',
  };

  constructor() {
    this.fProyecto = new FormGroup({
      nombre_proyecto:        new FormControl('', [Validators.required, Validators.minLength(16)]),
      nombre_corto:           new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      descripcion_proyecto:   new FormControl('', [Validators.required, Validators.minLength(24)]),
      tipo_proyecto:          new FormControl('', [Validators.required]),
      foto_proyecto:          new FormControl('', ),
      fecha_inicio_proyecto:  new FormControl('', [Validators.required]),
      fecha_fin_proyecto:     new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {}

  guardarProyecto() {
    console.log(this.fProyecto.value);
    console.log(this.fProyecto);
    console.log(this.fProyecto.get('nombre_proyecto').invalid);

    // this.resetear();
  }

  // Resetear Datos:
  resetear() {
    this.fProyecto.reset(this.proyectoBlanco);
  }
}
