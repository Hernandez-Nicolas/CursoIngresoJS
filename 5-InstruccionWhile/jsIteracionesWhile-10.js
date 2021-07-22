/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let respuesta,
	numero,
	suma_negativos=0,
	suma_positivos=0,
	contador_positivos=0,
	contador_negativos=0,
	contador_ceros=0,
	contador_pares=0,
	promedio_positivos,
	promedio_negativos,
	diferencia;
	do{
		numero=parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			alert("Eso no es un numero. Intentelo de nuevo");
			numero=parseInt(prompt("Ingrese un numero"));
		}
		if(numero<0){
			suma_negativos+=numero;
			contador_negativos++;
		}
		else if(numero>0){
			suma_positivos+=numero;
			contador_positivos++;
		}
		else{
			contador_ceros++;
		}
		if(!(numero%2)){
			contador_pares++;
		}
		respuesta=prompt("Quiere ingresar mas numeros? (si/no)").toLowerCase();
	}while(respuesta=="si")
	if(contador_negativos==0){
		promedio_negativos=0;
	}
	else{
		promedio_negativos=suma_negativos/contador_negativos;
	}
	if(contador_positivos==0){
		promedio_positivos=0;
	}
	else{
		promedio_positivos=suma_positivos/contador_positivos;
	}
	diferencia=contador_positivos-contador_negativos;
	alert("La suma de los numeros positivos: "+suma_positivos+
	"\nLa suma de los numeros negativos: "+promedio_negativos+
	"\nCantidad de numeros positivos: "+contador_positivos+
	"\nCantidad de numeros negativos: "+contador_negativos+
	"\nCantidad de numeros pares: "+contador_pares+
	"\nCantidad de ceros: "+contador_ceros+
	"\nEl promedio de los numeros positivos: "+promedio_positivos+
	"\nEl promedio de los numeros negativos: "+promedio_negativos+
	"\nLa diferencia entre positivos y negativos: "+diferencia);
}//FIN DE LA FUNCIÓN

// document.write(""); sobreescribe el documento HTML

/*necesarios:numero/acumuladornegativos/acumuladorpositivos
contadorpositivos/contadornegativos/contadorceros/contadorpares
promediopositivo/promedionegativos/diferencia/respuesta*/
/*bucle:pedir numero,validar numero,identificar signo
positivo:sumar y contarlo  negativo:acumulo y cuento cero:cuento
verificar par. par:cuento*/
//promediar positivos,promediar negativos,diferencia,mostrar