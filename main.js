let usuario = prompt("Ingrese el usuario");

while (usuario !== "Beccaria") {
  alert("usuario incorrecto");
  usuario = prompt("Ingrese el usuario");
}

alert("bienvenido");

function calculadora(num1, num2, operacion) {
   switch (operacion) {
     case "+":
       return num1 + num2;
       break;

     case "-":
       return num1 - num2;
       break;

     case "*":
       return num1 * num2;
       break;

     case "/":
       return num1 / num2;
       break;

     default:
       return "Operacion no identificada";
       break;
   }
 }

 let numeroUno = Number(prompt("Ingrese el numero uno"));
 let numeroDos = Number(prompt("Ingrese el numero dos"));
 let operacion = prompt("Ingrese la operación");
 let resultado = calculadora(numeroUno, numeroDos, operacion);
 alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`)