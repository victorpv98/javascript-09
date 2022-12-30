class Empleado {
  constructor(codigo, nombre, apellido, correo, cargo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.cargo = cargo;
  }

  sueldoBruto() {
    switch (this.cargo) {
      case "Jefe":
        return 5000;
      case "Analista":
        return 4000;
      case "Programador":
        return 3000;
      case "Soporte":
        return 2000;
      case "Asistente":
        return 1500;
      default:
        return 0;
    }
  }

  descuento() {
    return this.sueldoBruto() * 0.125;
  }

  sueldoNeto() {
    return this.sueldoBruto() - this.descuento();
  }
}
function calcularSueldo() {
  var codigo = document.getElementById("codigo").value;
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;
  var cargo = document.getElementById("cargo").value;

  var empleado = new Empleado(codigo, nombre, apellido, correo, cargo);

  var sueldoNeto = empleado.sueldoNeto();
  document.getElementById("sueldoNeto").innerHTML = empleado.sueldoNeto();
}
