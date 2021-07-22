function mostrar()
{
	var destino;
	destino=document.getElementById("txtIdDestino").value;
	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio");
			break;
		case "Cataratas":
			alert("Hace calor");
			break;
		case "Mar del plata":
			alert("Aveces frio, aveces calor");
			break;
		
	}
}//FIN DE LA FUNCIÓN