function mostrar()
{
	//tomo la edad  
	let edad, Estado;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	Estado=document.getElementById("estadoCivil").value;
	if(edad<18&&Estado!="Soltero")
		{alert("Es muy pequeño para NO ser soltero");}


}//FIN DE LA FUNCIÓN