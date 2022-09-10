//Función para el Ejercicio01
function pairNumber(number){
  let result;
  if(number%2==0){
    result="numero par";
  }else{
    result="numero impar";
  }
  return result;
}
//Función para el Ejercicio02
function informationString(message){
  let caseText;
  if(message==message.toLowerCase()){
    caseText="solo minusculas";
  }else if(message==message.toUpperCase()){
    caseText="solo mayusculas";
  }else{
    caseText="minusculas y mayusculas"
  }
}
//Función para el Ejercicio03
const inputNumber= function(){
  let numberA;
  do {
    numberA= Number(prompt("Ingresar lado del rectangulo:"));
  } while (isNaN(numberA));
  return numberA;
}
const perimeterRectangle= function(){
  const sideA= inputNumber();
  const sideB= inputNumber();
  alert(`El perímetro es: ${2*(sideA+sideB)}`);
}
//Función para el Ejercicio04
const tableMultiply= ()=>{
  let inputNumber;
  const table=[];
  do {
    inputNumber=parseInt(prompt("Ingresa el número de la tabla que deseas ver"));
  } while (isNaN(inputNumber));
  for(let i=0;i<=10;i++){
    table[i]=inputNumber*i;
  }
  alert("la tabla es: \n"+`${table.join("\n ")}`);
}
