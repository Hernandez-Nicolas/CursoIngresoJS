/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado=document.getElementById("txtIdNombre").value;
	alert(nombreIngresado);

}

/*"document." es el archivo html
getElementById es obtener el elemento segun su Id
.value es que pude el valor
"txtIdNombre.value" solofunciona en chrome*/