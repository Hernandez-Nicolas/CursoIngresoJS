/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let num,
	contador=0,
	acumulador=0,
	respuesta,
	prom;
	do{
		num=parseInt(prompt("Ingrse un numero"));
		acumulador=acumulador+num;
		contador++
		respuesta=prompt("Quiere seguir ingresando numeros? (si/no)");
	}while(respuesta=="si")
	prom=acumulador/contador;
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=prom;
}//FIN DE LA FUNCIÓN