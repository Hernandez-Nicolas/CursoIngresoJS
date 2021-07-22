function mostrar()
{
	var estacion,destino;
	var precio=15000;
	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;
	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					alert(precio*1.2);
					break;
				case "Cataratas":
				case "Cordoba":
					alert(precio-(precio*0.1));
					break;
				case "Mar del plata":
					alert(precio-(precio*0.2));
					break;}
			break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					alert(precio-(precio*0.2));
					break;
				case "Cataratas":
				case "Cordoba":
					alert(precio*1.1);
					break;
				case "Mar del plata":
					alert(precio*1.2);
					break;}
			break;
		case "Primavera":
		case "Otoño":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					alert(precio*1.1);
					break;
				case "Cordoba":
					alert(precio);
					break;}
			break;
	}

}//FIN DE LA FUNCIÓN