import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actividad-tarjeta-horizontal',
  templateUrl: './actividad-tarjeta-horizontal.component.html',
  styleUrls: ['./actividad-tarjeta-horizontal.component.css']
})
export class ActividadTarjetaHorizontalComponent implements OnInit {
  @Input() linkDetalle: string;
  @Input() actividad: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
