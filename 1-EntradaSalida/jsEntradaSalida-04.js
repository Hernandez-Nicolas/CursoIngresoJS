/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let dato;
	dato=prompt("ingrese su nombre");
	document.getElementById("txtIdNombre").value=dato;
	alert("ok");
}

