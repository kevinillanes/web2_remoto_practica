class Empleado{

    constructor(nombres,apellidos,carnet,codEmpleado,pagoHora,cantHoras,fechaIngreso){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.carnet = carnet;
        this.codEmpleado = codEmpleado;
        this.pagoHora = pagoHora;
        this.cantHoras = cantHoras;
        this.fechaIngreso = fechaIngreso;
    }

    calcularSueldo(){
        return (this.pagoHora * this.cantHoras) + this.calcularAntiguedad();
    }

    calcularAntiguedad(){
        let cantidad = 2026 - this.fechaIngreso; //cantidad de años
        let monto;
        if(cantidad > 15){
            monto = 1500;
        }else if(cantidad > 10){
            monto = 900;
        }else if(cantidad > 6){
            monto = 500;
        }else{
            monto = 0;
        }

        return monto;
    }
}