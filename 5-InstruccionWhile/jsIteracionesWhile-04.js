/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero=parseInt(prompt("ingrese un número entre 0 y 9."));
	while(numero<0||numero>9){
		alert("Ingrese un numero dentro del rango de 0 a 9");
	}
	
}//FIN DE LA FUNCIÓN