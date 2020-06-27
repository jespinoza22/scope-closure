//js utiliza el hoisting en declaraciones no inicializaciones

a = 2;
var a;
console.log(a); ///

console.log(a);
var a = 2;

nameOfDog('Elmo');
function nameOfDog(name) {
    console.log(name);
}


//new added by junior
function nombreDelGato(nombre) {
    console.log("El nombre de mi gato es " + nombre);
  }
  
  nombreDelGato("Maurizzio");
  /*
  El resultado del código es: "El nombre de mi gato es Maurizzio"
  */

 nombreDelGato("Dumas");

 function nombreDelGato(nombre) { 
   console.log("El nombre de mi gato es " + nombre);
 }
 /*
 El resultado del código es: "El nombre de mi gato es Dumas"
 */

var x = 5;

(function () {
    var x; // Se elevo la declaración
    console.log("x:", x); // undefined
    x = 10;
    console.log("x:", x); // 10
}());

var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Inicializa y

//JavaScript sólo utiliza el hoisting en declaraciones, no inicializaciones

