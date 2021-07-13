function mostrar()
{
	//tomo la edad 
	let edad;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	if(edad<=17&&edad>=13)
	{alert("Eres adolecente");}
	else{
		if(edad>17)
		{alert("Eres adulto");}
		else
		{alert("Eres un niño")}
	}


}//FIN DE LA FUNCIÓN