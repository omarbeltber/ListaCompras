
let contador =0;
let costoTotal = 0;
let element = document.getElementById("totalPrecio");
element.innerHTML="Total en precio";

let txtNombre = document.getElementById("Name");
//txtNombre.value= "Leche Semidescremada";
//console.log(txtNombre.value);
let txtNumber = document.getElementById("Number");

let total = document.getElementById("precioTotal");

//let campos = document.getElementsByClassName("campo");
//campos[0].value = "Leche descremada deslactosada light";
//console.log(campos[0].value);
//console.log(campos);

//for (let i=0; i<campos.length; i++) {
    //campos[i].style.border="red thin solid";
//}//for i

//let spans = document.getElementsByTagName("span");
//for (let i=0; i<spans.length; i++){
    //console.log(spans[i].textContent);
//}//for i

 let tabla = document.getElementById("tablaListaCompras");
 let cuerpoTabla = tabla.getElementsByTagName("tbody");

//cuerpoTabla[0].innerHTML = `<tr>
//<th scope="row">1</th>
//<td>Leche descremada</td>
//<td>3</td>
//<td>$ 23.00</td>
//</tr>`;

function validarNombre(){
        if (txtNombre.value.length <3){
            return false;
        }//if
        return true;
}//validarNombre

function validarCantidad(){
    if(txtNumber.value.length==0) {
        return false;
    }// if
     if (isNaN(txtNumber.value)){
        return false;
     }//if

     if (parseFloat(txtNumber.value)<=0) {
        return false;
     }//if
     return true;
}// validarCantidad


let agregar = document.getElementById("btnAgregar");

agregar.addEventListener("click", (event) => {
    event.preventDefault();
    if ( (! validarNombre()) || (! validarCantidad()) ) {
        document.getElementById("alertValidacionesTexto").innerHTML="Los campos deben ser llenados correctamente";
        document.getElementById("alertValidaciones").style.display="block";
       if(!validarNombre()){
           console.log(txtNombre.style.border);
           txtNombre.style.border="red thin solid";
           lista+= "<li>Se debe escribir un nombre válid</li>";
       }//
       if(!validarCantidad()){
        console.log(txtNumber.style.border);
        txtNumber.style.border="red thin solid";
        lista+="<li>Se debe escribir una cantidad válida</li>";
       }//
       document.getElementById("alertValidacionesTexto").innerHTML=`
       Los campos deben ser llenados correctamente.
       <ul>${lista}</ul>
       `;
        setTimeout (function(){
           document.getElementById("alertValidaciones").style.display="none";
       },
          5000
       );
        return false;
    }//if
    txtNombre.style.border="";
    txtNumber.style.border="";
    document.getElementById("alertValidaciones").style.display="none";
    contador++; 
    document.getElementById( "contadorProductos").innerHTML=contador;
    let precio = (Math.floor((Math.random() * 50)*100))/100;
    let cantidad = parseFloat(txtNumber.value);
     costoTotal+= (precio * cantidad);
     total.innerHTML = `$ ${costoTotal.toFixed(2)}`;
    let tmp = `<tr>
    <th scope="row">${contador}</th>
    <td> ${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>$ ${precio}</td>
    </tr> ` ;
    console.log(tmp);
      cuerpoTabla[0].innerHTML += tmp;
      txtNumber.value="";
      txtNombre.value="";
      txtNombre.focus();

    }
);


txtNombre.addEventListener("blur", (event)=>{
    event.target.value = event.target.value.trim();
  }
);

txtNumber.addEventListener("blur", (event)=>{
    event.target.value = event.target.value.trim();
  }
);




//agregar.onclick =