export class Empleado {
  constructor(
    nombre: string,
    apellido: string,
    cargo: string,
    salario: number
  ) {
    /* iniciar los campos de clase */
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.salario = salario;
  }

  /*  variables */
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  salario: number = 0;
}
