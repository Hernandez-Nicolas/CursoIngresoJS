/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let lampara=35,
     marca,
     cantidad,
     precio,
     descuento=0,
     final;
    cantidad=parseInt(document.getElementById("txtIdCantidad").value);
    marca=document.getElementById("Marca").value;
    if(cantidad>=6){
        descuento=lampara*0.5;
    }
    else{
        switch(cantidad){
            case 5:
                if(marca=="ArgentinaLuz"){
                    descuento=lampara*0.4;
                }
                else{
                    descuento=lampara*0.3;
                }
                break;
            case 4:
                if(marca=="ArgentinaLuz"||marca=="FelipeLamparas"){
                    descuento=lampara*0.25;
                }
                else{
                    descuento=lampara*0.2;
                }
            break;
            case 3:
                if(marca=="ArgentinaLuz"){
                    descuento=lampara*0.15;
                }
                else if(marca=="FelipeLamparas"){
                    descuento=lampara*0.1;
                }
                else{
                    descuento=lampara*0.05;
                }
            break;
            case 2:
            case 1:
            break;
            default:
                alert("Ingrese una cantidad valida");
        }  
    }
    lampara-=descuento;
    precio=cantidad*lampara;
    document.getElementById("txtIdprecioDescuento").value=lampara;
    if(precio>120){
        final=precio+precio*0.1;
        alert("El precio total es "+final+". El aumento es de "+precio*0.1);
    }
}
/* No mostrar el precio de todas las lamparas sumadas - el
descuento, sino, el precio de cada lampara con descuento.
reemplasar una linea repetida mucho y escribirlo una sola vez
al final, ej: 1)blalbla 2)blabla, fuera de 1 y 2, poner blabla
poner todas las cosas resolutorias al fina*/