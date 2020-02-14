var fechadenacimiento,fechahoy,varmes, d = new Date();
varmes=parseInt(d.getMonth())+1; //Obtiene el valor del mes actual restandole uno, ejemplo febrero (2), lo toma como enero (1), por tanto se le suma uno 
fechahoy=(d.getDate()+','+varmes.toString()+','+d.getFullYear()).split(',');
var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
if(Calculoedad(diaNacimiento+','+mesNacimiento+','+anioNacimiento)==true){ //If mayoria de edad
var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
var hijos = prompt("¿Tiene hijos?", "SI/NO");
conyuge =conyuge.toLowerCase();
hijos =hijos.toLowerCase();
document.write(hijos);
if(hijos=='si')
var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");
}//If mayoria de edad
else{
  alert('No cumple los requisitos de edad');
}














function Calculoedad(edad) //funcion para validar si es mayor de edad o no lo es
 {
   var bandera=false;
   //edad='12,1,2002';
   fechadenacimiento=edad.split(',');
    if(
      ((parseInt(fechahoy[2], 10) -  parseInt(fechadenacimiento[2], 10)) == 18) && 
     (  parseInt(fechadenacimiento[1], 10)  <=    parseInt(fechahoy[1], 10) ) &&
     (  parseInt(fechadenacimiento[0], 10)  <=    parseInt(fechahoy[0], 10) )
   )
   {
     bandera = true;
   } 
   
   if(
      ((parseInt(fechahoy[2], 10) -  parseInt(fechadenacimiento[2], 10)) > 18) &&
     (  parseInt(fechadenacimiento[1], 10)  >=    parseInt(fechahoy[1], 10) ) &&
     (  parseInt(fechadenacimiento[0], 10)  >=    parseInt(fechahoy[0], 10) )
   )
   {
     bandera = true;
   }
   return bandera;
 }




//document.write(Calculoedad());