import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados: Empleado[] = [
    new Empleado('Giovanni', 'Di Rosa', 'Front End', 1020),
    new Empleado('Carlos', 'Henriquez', 'Full Stack', 1400),
    new Empleado('José', 'Delgado', 'Full Stack', 2000),
    new Empleado('Constanza', 'Pizarro', 'Diseño UX/UI', 1000),
  ];

  insertarEmpleado() {
    let nuevoEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );

    this.empleados.push(nuevoEmpleado);
  }


  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
}
