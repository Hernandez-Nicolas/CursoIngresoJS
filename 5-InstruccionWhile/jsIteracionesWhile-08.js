/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta,
	num,
	suma=0,
	multiplicacion=1,
	contador=0;//flag=0;
	do{
		num=parseInt(prompt("Ingrese un numero"));
		if(num>=0){
			suma+=num;
		}
		else{
			multiplicacion*=num;
			contador++;//flag=1;
		}
		respuesta=prompt("Quiere seguir agregando numero? (si/no)");
	}while(respuesta=="si")
	document.getElementById("txtIdSuma").value=suma;
	if(contador==0)/*if(flag)*/{
		document.getElementById("txtIdProducto").value=0;
	}
	else{
		document.getElementById("txtIdProducto").value=multiplicacion;
	}

}//FIN DE LA FUNCIÓN
// flag, saber si el programa paso un bloque o no
// es mejor inicialisar una variable flag en 0 y
// dentro del else poner flag=1