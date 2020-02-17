var fechadenacimiento='',fechahoy,  varmes , d = new Date(),recargo=0, recargoconyuge=0,recargohijos=1;

varmes=parseInt(d.getMonth())+1; //Obtiene el valor del mes actual restandole uno, ejemplo febrero (2), lo toma como enero (1), por tanto se le suma uno 
fechahoy=(d.getDate()+','+varmes.toString()+','+d.getFullYear()).split(',');
var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");



//if(Calculoedad(diaNacimiento+','+mesNacimiento+','+anioNacimiento)==true){ //If mayoria de edad

if(edad(diaNacimiento+','+mesNacimiento+','+anioNacimiento)>17){ //If mayoria de edad

  if(edad(diaNacimiento+','+mesNacimiento+','+anioNacimiento) <22){
    recargo= 0;
  }
  
 




 
var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
conyuge =conyuge.toLowerCase();
if(conyuge=='si')
{
  var diaNacimientoConyuge = prompt("Ingrese el día de nacimiento del conyuge", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
  var mesNacimientoConyuge = prompt("Ingrese el mes de nacimiento del conyuge", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
  var anioNacimientoConyuge = prompt("Ingrese el año de nacimiento del conyuge", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
}

var hijos = prompt("¿Tiene hijos?", "SI/NO");
hijos =hijos.toLowerCase();

if(hijos=='si'){

var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");
  recargohijos= recargohijos*parseInt(cantidadHijos) ;
}
else{
  recargohijos= 0;
}

Validacionrecargos(edad(diaNacimiento+','+mesNacimiento+','+anioNacimiento), 'Asegurado');

Validacionrecargos(edad(diaNacimientoConyuge+','+mesNacimientoConyuge+','+anioNacimientoConyuge), 'Conyuge');




document.write('<center>'+nombreCompleto);

document.write('<br><center>Recargo del asegurado '+recargo.toString()+' % ' + edad(diaNacimiento+','+mesNacimiento+','+anioNacimiento));
document.write('<br><center>Recargo por los conyuges '+recargoconyuge.toString()+' %' );
document.write('<br><center>Recargos por hijos menores de 21 años '+recargohijos.toString()+' %' );
//d//ocument.write(edad(diaNacimientoConyuge+','+mesNacimientoConyuge+','+anioNacimientoConyuge).toString());

}//If mayoria de edad
else{
  alert('No cumple los requisitos de edad');
}












function edad(edad){
  var Arrayedad =edad.split(','), anios;
 anios= (parseInt(fechahoy[2], 10) -  parseInt(Arrayedad[2], 10))
return anios;
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

function Validacionrecargos(edad,estatus)
{
 
  if(estatus =='Asegurado')
  {
 if(edad >21 && edad <25)
 recargo= 1;

 if(edad >25 && edad <30)
 recargo= 2;

 if(edad >29 && edad <40)
 recargo= 5;

 if(edad >39 && edad <50)
 recargo= 8;
 if(edad >49 && edad <65)
 recargo= 12;
 return recargo ;  
}
  if(estatus =='Conyuge')
  {
    if( edad <30)
    recargoconyuge= 1;
   
    if(edad >=30 && edad <40)
    recargoconyuge= 2;
   
    if(edad >=40 && edad <50)
    recargoconyuge= 3;
   
    if(edad >=50 && edad <70)
    recargoconyuge= 5;

    return recargoconyuge ;
  }

}


//document.write(Calculoedad());