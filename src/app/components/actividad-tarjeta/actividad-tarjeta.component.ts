import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actividad-tarjeta',
  templateUrl: './actividad-tarjeta.component.html',
  styleUrls: ['./actividad-tarjeta.component.css']
})
export class ActividadTarjetaComponent implements OnInit {
  @Input() linkDetalle: string;
  @Input() actividad: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
