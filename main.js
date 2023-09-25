let repetir

while(repetir){
console.log("Hola"); }

let usuario = prompt("Ingrese el usuario");

while (usuario !== "Beccaria") {
  alert("usuario incorrecto");
  usuario = prompt("Ingrese el usuario");
}

alert("bienvenido");

let nota1=parseInt(prompt("ingrese nota1"))
let nota2=parseInt(prompt("ingrese nota2"))
let nota3=parseInt(prompt("ingrese nota3"))

let promedio=(nota1+nota2+nota3)/3
parseInt(promedio)

if(promedio>=0 && promedio<=7){
    document.write(`lo siento estas desaprobado ${promedio}`)
}
else if(promedio>=7 && promedio<=10){
    document.write(`felicidades estas aprobado ${promedio}`)
}
else{
    alert("ingresaste una nota fuera de rango")
}

