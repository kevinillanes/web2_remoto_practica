class Contador extends Empleado{

    constructor(nombres,apellidos,carnet,codEmpleado,pagoHora,cantHoras,fechaIngreso,pagoHoraExtra){
        super(nombres,apellidos,carnet,codEmpleado,pagoHora,cantHoras,fechaIngreso);
        this.pagoHoraExtra = pagoHoraExtra;
    }

    //sobreescritura
    calcularSueldo(){
        return super.calcularSueldo() + this.pagoHoraExtra;
    }
}