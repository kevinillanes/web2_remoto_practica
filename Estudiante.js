class Estudiante{

    #nombre; //private
    //constructor
    constructor(nombre, apPat, apMat, carrera){
        this.nombre = nombre;
        this.apPat = apPat;
        this.apMat = apMat;
        this.carrera = carrera;
    }

    //get y set
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }

    
}



