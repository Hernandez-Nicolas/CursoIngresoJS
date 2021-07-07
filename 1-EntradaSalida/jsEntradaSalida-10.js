/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	let Importe,Resultado;
	Importe=parseInt(document.getElementById("txtIdImporte").value);
	Resultado=Importe-((Importe/100)*25);
	document.getElementById("txtIdResultado").value=Resultado;
}
