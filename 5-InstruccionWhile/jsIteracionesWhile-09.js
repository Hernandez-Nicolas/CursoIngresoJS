/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let num,
	max,
	min,
	primero=true,
	respuesta;
	//iniciar variables
	do{
		num=parseInt(prompt("Ingrese un numero"));
		if(!(isNaN(num))){//para validar que es un numero
			if(primero){
				max=num;
				min=num;
				primero=false;
			}
			else if(num<min){
				min=num;
			}
			else if(num>max){
				max=num;
			}
		}
		else{
			alert("Ese no es un numero. Intentelo de nuevo");
		}
		respuesta=prompt("Quiere ingresar mas numeros? (si/no)").toLowerCase();
	}while(respuesta=="si")
	document.getElementById("txtIdMaximo").value=max;
	document.getElementById("txtIdMinimo").value=min;
}//FIN DE LA FUNCIÓN
// .toLowerCase() cambia el string a minusculas

/*if(primero==true||num>max){ max=num; }
if(primero==true||num<min){ min=num; primero=false; }*/