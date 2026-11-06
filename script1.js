//arreglo inicial
const edades = [25,20,22,23,21,20];

let sinTipo = [25,"Cadena", true, {nombre:"Jose",apellido:"Perez"}];

const alumnos = {nombre:"Jose",apellido:"Perez",carrera:"Sistemas Informaticos"};

console.log(edades);

//push & pop
/*edades.push(50);
console.log(edades);

//shift

edades.shift();
console.log(edades);*/

//splice
edades.splice(1,1,60,70);
console.log(edades);

//filter

const nuevo = edades.filter(valor=>valor>21);
console.log(nuevo);

//indexOF
const valorBuscado = edades.indexOf(22);
console.log(valorBuscado);

//includes
console.log(edades.includes(22));

//forEach
edades.forEach((edad) => 
    console.log(edad)
);

//map
const nuevoArray = edades.map(num => num + 5);
console.log(nuevoArray);
