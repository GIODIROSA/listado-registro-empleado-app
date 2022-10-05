import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {


  @Output() caracteristicasEmpleados = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
  }


  agregaCaracteristicas(nuevaCaracteristica: string) {
    this.caracteristicasEmpleados.emit(nuevaCaracteristica);
  }

}
