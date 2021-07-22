function mostrar()
{
	let suma=0,promedio,numero,contador=0;
	while(contador<5){
		numero=parseInt(prompt("ingresar un numero."));
		suma+=numero;
		contador++;
	}
	promedio=suma/5;
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN

	// let a,b,c,d,e;
	// let promedio,suma;
	// a=parseInt(prompt("ingrese un numero"));
	// b=parseInt(prompt("ingrese un numero"));
	// c=parseInt(prompt("ingrese un numero"));
	// d=parseInt(prompt("ingrese un numero"));
	// e=parseInt(prompt("ingrese un numero"));;
	// suma=a+b+c+d+e;
	// promedio=suma/5;
	// document.getElementById("txtIdSuma").value=suma;
	// document.getElementById("txtIdPromedio").value=promedio;