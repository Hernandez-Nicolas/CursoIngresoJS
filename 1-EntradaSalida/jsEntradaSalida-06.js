/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	let NumA, NumB, suma;
	NumA = parseInt(document.getElementById("txtIdNumeroUno").value);
	NumB = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = NumB + NumA;
	alert(suma);
}

