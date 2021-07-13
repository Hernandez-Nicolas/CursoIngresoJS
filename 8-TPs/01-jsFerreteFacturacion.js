/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let Num1, Num2, Num3;
    Num1=parseInt(document.getElementById("txtIdPrecioUno").value);
    Num2=parseInt(document.getElementById("txtIdPrecioDos").value);
    Num3=parseInt(document.getElementById("txtIdPrecioTres").value);
    alert(Num1+Num2+Num3);
}
function Promedio() {
    let Num1, Num2, Num3;
    Num1=parseInt(document.getElementById("txtIdPrecioUno").value);
    Num2=parseInt(document.getElementById("txtIdPrecioDos").value);
    Num3=parseInt(document.getElementById("txtIdPrecioTres").value);
    alert((Num1+Num2+Num3)/3);
}
function PrecioFinal() {
    let Num1, Num2, Num3;
    Num1=parseInt(document.getElementById("txtIdPrecioUno").value);
    Num2=parseInt(document.getElementById("txtIdPrecioDos").value);
    Num3=parseInt(document.getElementById("txtIdPrecioTres").value);
    alert((Num1+Num2+Num3)*1.21);
}