var ventanas = [];

/*Funcion que permite abrir una nueva ventana*/
function abrirVentana(nombreProduccion){
	//console.log(nombreProduccion);
	var ventana;
	var boolean = false;

	for(var i = 0; i<ventanas.length; i++){
		/*Si el nombre de la ventana y el nombre de la produccion son iguales y existe la ventana
		y la ventana no esta cerrada.*/
		if((ventanas[i].name === nombreProduccion) && ventanas[i] && (!ventanas[i].closed)){
			ventanas[i].focus(); //Le ponemos a la ventana el focus
			boolean = true; //Cambiamos el valor de encontrada a true
		}
	}
    if (!boolean){
        //Abre una ventana nueva con una con nombre y características.
		ventana = window.open("Recursos.html",nombreProduccion,"toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=600");
		ventanas.push(ventana);
    }
}

/*Funcion que te permite cerrar todas las ventanas*/
function cerrarVentanas(){
	for(var i = 0; i<ventanas.length; i++){
		if(!ventanas[i].closed){
			ventanas[i].close();
		}
	}
}

//Funcion que muestra los recursos relacionados con una producción.
function showResource(){
    var tituloPrincipal = window.opener.document.getElementById("tituloprincipal").innerHTML;
	document.getElementById("tituloprincipal").innerHTML = tituloPrincipal; 

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	var video = window.opener.VideoSystem.getInstance();

	//Recogemos en variables el iterador de producciones
	var producciones = video.productions;
	var produccion = producciones.next();

	var encontrado = false;

	//Mientras existan producciones y encontrado= false
	while((produccion.done !== true) && (!encontrado)){ 
		//Si el titulo de la produccion es igual al titulo recogido al principio
		if(produccion.value.title == tituloPrincipal){
			//Creamos el contenido de cada tarjeta
			var div = document.createElement("div");
			div.setAttribute("class","col-lg-12 col-md-12 mb-4");
					
			var divImagen = document.createElement("div");
			divImagen.setAttribute("class","border d-flex justify-content-center");

			var divNuevo = document.createElement("div");
			divNuevo.setAttribute("class","");

			var img = document.createElement("img");
			img.setAttribute("class","carr-img-top");
			img.setAttribute("src","img/"+produccion.value.title+".jpg");
			img.setAttribute("height","400");
			img.setAttribute("alt",produccion.value.title);

			var div2 = document.createElement("div");
			div2.setAttribute("class","card-body");
					
			var button = document.createElement("button");
			button.setAttribute("type","button");
			button.setAttribute("value",produccion.value.title);
			button.setAttribute("class","btn btn-link btn-lg btn-block");
				
			var titulo = document.createElement("p");
			titulo.setAttribute("class","card-text");
			titulo.appendChild(document.createTextNode(produccion.value.title));

			var recurso = document.createElement("p");
			recurso.setAttribute("class","card-text");
			recurso.appendChild(document.createTextNode("Recurso: " + produccion.value.resource));

			//Añadimos los elementos al contenido principal
			contenido.appendChild(div);
			div.appendChild(divImagen);
			divImagen.appendChild(divNuevo);
			divNuevo.appendChild(img);
			divImagen.appendChild(div2);
			div2.appendChild(button);
			div2.appendChild(titulo);
			div2.appendChild(recurso);

			encontrado = true;
		}

		//Llamamos al iterador para pasar a la siguiente produccion
		produccion = producciones.next();
	}

}
window.onload = showResource();