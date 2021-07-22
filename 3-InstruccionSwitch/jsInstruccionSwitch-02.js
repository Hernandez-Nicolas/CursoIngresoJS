function mostrar()
{
	//tomo el mes
	var mes;
	mes=document.getElementById("txtIdMes").Value;
	switch(mes)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert ("Ya pasamos el frio, ahora calor");
			break;
		default:
			alert("Falta para el invierno");
	}
	// if(mes=="Julio"||mes=="Agosto")
	// {alert("Abrigate que hace frio");}
	// else if(mes=="Septiembre"||mes=="Octubre"||mes=="Noviembre"||mes=="Diciembre")
	// {alert("Ya pasamos el frio, ahora calor");}
	// else{
	// 	alert("Falta para el invierno");
	// }
}//FIN DE LA FUNCIÓN