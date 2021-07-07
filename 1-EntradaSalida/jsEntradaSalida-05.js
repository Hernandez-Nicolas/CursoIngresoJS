/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let Nombre, Edad;
	Nombre=document.getElementById("txtIdNombre").value;
	Edad=document.getElementById("txtIdEdad").value;
	alert("Usted se llama "+Nombre+" y tiene "+Edad+" años");
}

/* eso es concatenar. otra manera de hacerlo seria:
interpolacuin:: alert(`blabla &{variable} blabla`) */