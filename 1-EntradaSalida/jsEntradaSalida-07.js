/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	let NumA, NumB;
	NumA=parseInt(document.getElementById("txtIdNumeroUno").value);
	NumB=parseInt(document.getElementById("txtIdNumeroDos").value);
	alert(NumA+NumB);
}

function restar() {
	let NumA, NumB;
	NumA=parseInt(document.getElementById("txtIdNumeroUno").value);
	NumB=parseInt(document.getElementById("txtIdNumeroDos").value);
	alert(NumA-NumB);
}

function multiplicar() {
	let NumA, NumB;
	NumA=parseInt(document.getElementById("txtIdNumeroUno").value);
	NumB=parseInt(document.getElementById("txtIdNumeroDos").value);
	alert(NumA*NumB);
}

function dividir() {
	let NumA, NumB;
	NumA=parseInt(document.getElementById("txtIdNumeroUno").value);
	NumB=parseInt(document.getElementById("txtIdNumeroDos").value);
	alert(NumA/NumB);
}

