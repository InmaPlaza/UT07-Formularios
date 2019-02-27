var video = VideoSystem.getInstance();
document.cookie = "username=prueba;"; //Para la entrega lo tengo que borrar

function formularioIS(){
	var contenido = document.getElementById("formularioInicioSesion");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	//Si la cookie está vacia...muestro el formulario de Inicio de Sesion
	if(comprobarCookie("username") == ""){
		var formulario = document.createElement("form");
		formulario.setAttribute("id", "IniciarSesion");
		var h1 = document.createElement("h5");
		h1.setAttribute("id", "tituloFormulario");
		h1.appendChild(document.createTextNode("Iniciar Sesión"));
		var divUsuario = document.createElement("div");
		divUsuario.setAttribute("class", "form-group");
		var label1 = document.createElement("label");
		label1.setAttribute("for", "Usuario");
		label1.appendChild(document.createTextNode("Usuario"));
		var input1 = document.createElement("input");
		input1.setAttribute("type", "text");
		input1.setAttribute("class", "form-control");
		input1.setAttribute("id", "Usuario");
		var divContra = document.createElement("div");
		divContra.setAttribute("class", "form-group");
		var label2 = document.createElement("label");
		label2.setAttribute("for", "Contrasenia");
		label2.appendChild(document.createTextNode("Contraseña"));
		var input2 = document.createElement("input");
		input2.setAttribute("type", "password");
		input2.setAttribute("class", "form-control");
		input2.setAttribute("id", "Contrasenia");
		var boton = document.createElement("button");
		boton.setAttribute("type", "button");
		boton.setAttribute("id", "botonIS")
		boton.setAttribute("class", "p-1");
		boton.appendChild(document.createTextNode("Iniciar Sesión"));
		boton.addEventListener("click", crearCookie);

		
		contenido.appendChild(formulario);
		formulario.appendChild(h1);
		formulario.appendChild(divUsuario);
		divUsuario.appendChild(label1);
		divUsuario.appendChild(input1);
		formulario.appendChild(divContra);
		divContra.appendChild(label2);
		divContra.appendChild(input2);
		formulario.appendChild(boton);
	}
	//Si la cookie no está vacia...creamos el boton de Cerrar Sesion
	else{
		var boton = document.createElement("button");
		boton.setAttribute("type", "button");
		boton.setAttribute("id", "botonCS");
		boton.setAttribute("class", "p-1 btn-block");
		boton.appendChild(document.createTextNode("Cerrar Sesión"));
		boton.addEventListener("click", cerrarSesion);

		var botonAñadir = document.createElement("button");
		botonAñadir.setAttribute("type", "button");
		botonAñadir.setAttribute("id", "botonCS");
		botonAñadir.setAttribute("class", "p-1 btn-block");
		botonAñadir.appendChild(document.createTextNode("Añadir"));
		botonAñadir.addEventListener("click", Añadir);

		var botonMod = document.createElement("button");
		botonMod.setAttribute("type", "button");
		botonMod.setAttribute("id", "botonCS");
		botonMod.setAttribute("class", "p-1 btn-block");
		botonMod.appendChild(document.createTextNode("Modificar"));
		botonMod.addEventListener("click", Modificar);

		var botonElim = document.createElement("button");
		botonElim.setAttribute("type", "button");
		botonElim.setAttribute("id", "botonCS");
		botonElim.setAttribute("class", "p-1 btn-block");
		botonElim.appendChild(document.createTextNode("Eliminar"));
		botonElim.addEventListener("click", Eliminar);

		contenido.appendChild(botonAñadir);
		contenido.appendChild(botonMod);
		contenido.appendChild(botonElim);
		contenido.appendChild(boton);
	}
}

function crearCookie(){
    //Recogemos los datos(id) del formulario
    var nombre = document.getElementById("Usuario").value;
    var contra = document.getElementById("Contrasenia").value;
    var fecha = new Date(2025, 12, 25)

    var video = VideoSystem.getInstance();
    var boolean = false;
    //Recogemos en variables el iterador de categorias
	var usuarios = video.users;
    var usuario = usuarios.next();
    
    //Mientras el usuario exista y boolean = false
    while(usuario.done !== true && (!boolean)){
        //Si el nombre del usuario es igual al nombre recogido y la contraseña del usuario es igual a la contraseña recogida
        if((usuario.value.username == nombre) && (usuario.value.password == contra)){
            //Asignamos a la cookie los valores recogidos del formulario
            document.cookie = "username=" + nombre;
            document.cookie = "password=" + contra;
            document.cookie = "expires=" + fecha.toUTCString();

            boolean = true;

			formularioIS();
        }
        usuario = usuarios.next();
    }
}

function comprobarCookie(valor){
	var nombre = valor + "=";
	var arrayCookie = document.cookie.split(';');

	for(var i = 0; i < arrayCookie.length; i++){
		var palabra = arrayCookie[i];
		while(palabra.charAt(0) == ' '){
			palabra = palabra.substring(1);
		}

		if(palabra.indexOf(nombre) == 0){
			return palabra.substring(nombre.length, palabra.length);
		}
	}
	return "";
}

function cerrarSesion(){
	document.cookie = "username=";
	document.cookie = "password=";
	document.cookie = "expires=Thu, 18 Dec 2013 12:00:00 UTC";

	formularioIS();
	showHomePage();
}

function Añadir(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Añadir";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/categoria.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Categorías"));
	button.addEventListener("click", FormAñadirCategoria);

	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);


	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/actor.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Actores"));
	button.addEventListener("click", FormAñadirActor);

	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);


	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/director.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Directores"));
	button.addEventListener("click", FormAñadirDirector);


	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);

	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 offset-1 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/producciones.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Producciones"));
	button.addEventListener("click", FormAñadirProd);


	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);

	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 offset-1 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/recurso.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Recursos"));
	//button.addEventListener("click", FormAñadirRecurso);


	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);	
}

function Modificar(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Modificar";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/categoria.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Categorías"));
	button.addEventListener("click", FormModificarCategoria);

	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);


	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/actor.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Actores"));
	button.addEventListener("click", FormModificarActor);

	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);


	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/director.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Directores"));
	button.addEventListener("click", FormModificarDirector);


	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);
}

function Eliminar(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Eliminar";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/categoria.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Categorías"));
	button.addEventListener("click", FormEliminarCategoria);

	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);


	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/actor.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Actores"));
	button.addEventListener("click", FormEliminarActor);

	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);


	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/director.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Directores"));
	button.addEventListener("click", FormEliminarDirector);


	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);

	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 offset-1 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/producciones.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Producciones"));
	button.addEventListener("click", FormEliminarProd);


	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);

	//Creamos el contenido de cada tarjeta
	var div = document.createElement("div");
	div.setAttribute("class","card col-lg-4 offset-1 col-md-6 mb-3");
	div.setAttribute("style","height: 300px;");

	var img = document.createElement("img");
	img.setAttribute("class","card-img-top text-center m-auto pt-4");
	img.setAttribute("src","img/recurso.png");
	img.setAttribute("alt","Card image cap");
	img.setAttribute("style", "width:200px; height:200px");

	var div2 = document.createElement("div");
	div2.setAttribute("class","card-body");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn btn-link btn-lg btn-block");
	button.appendChild(document.createTextNode("Recursos"));
	//button.addEventListener("click", FormEliminarRecurso);


	//Añadimos los elementos al contenido principal
	contenido.appendChild(div);
	div.appendChild(img);
	div.appendChild(div2);
	div2.appendChild(button);
}

function FormAñadirCategoria(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Añadir Categoría";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var formulario = document.createElement("form");
	formulario.setAttribute("id","formulario");
	var p = document.createElement("p");
	p.setAttribute("id","excepcion");
	p.setAttribute("class","text-center font-weight-bold");
	var div = document.createElement("div");
	div.setAttribute("class", "form-group");
	var label = document.createElement("label");
	label.setAttribute("for","nombreC");
	label.appendChild(document.createTextNode("Nombre"));
	var input = document.createElement("input");
	input.setAttribute("type","text");
	input.setAttribute("class","form-control");
	input.setAttribute("id","nombreC");
	var pError = document.createElement("p");
	pError.setAttribute("id","errorNombre");
	pError.setAttribute("class","error");
	var div2 = document.createElement("div");
	div2.setAttribute("class", "form-group");
	var label2 = document.createElement("label");
	label2.setAttribute("for","descC");
	label2.appendChild(document.createTextNode("Descripción"));
	var textarea = document.createElement("textarea");
	textarea.setAttribute("class","form-control");
	textarea.setAttribute("id","descC");
	textarea.setAttribute("rows","3");

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn");
	button.setAttribute("id","botonAC");
	button.appendChild(document.createTextNode("Añadir"));
	button.addEventListener("click", AñadirCategoria);

	contenido.appendChild(formulario);
	formulario.appendChild(p);
	formulario.appendChild(div);
	div.appendChild(label);
	div.appendChild(input);
	div.appendChild(pError);
	formulario.appendChild(div2);
	div2.appendChild(label2);
	div2.appendChild(textarea);
	formulario.appendChild(button);

}

function AñadirCategoria(){
	var nombreCat = document.getElementById("nombreC");
	var descCat = document.getElementById("descC").value;
	var error = document.getElementById("errorNombre");
	var excepcion = document.getElementById("excepcion");

	if(nombreCat.value == ""){
		nombreCat.setAttribute("style","border-color:red");
		error.innerHTML = "El campo nombre es obligatorio.";
	}
	else{
		nombreCat.removeAttribute("style");
		error.innerHTML = "";

		var categoria = new Category(nombreCat.value,descCat);

		try{
            video.addCategory(categoria);
            excepcion.innerHTML = "Categoría añadida con éxito.";
        }catch(error){
            excepcion.innerHTML = error.message;
        }
	}
	categoriesMenuPopulate();
}

function FormModificarCategoria(){
	//var video = VideoSystem.getInstance();
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Modificar Categoría";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var formulario = document.createElement("form");
	formulario.setAttribute("id","formulario");
	var tabla = document.createElement("table");
	tabla.setAttribute("class","table table-bordered table-hover");
	var thead = document.createElement("thead");
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.appendChild(document.createTextNode("Nombre"));
	var th1 = document.createElement("th");
	th1.appendChild(document.createTextNode("Descripción"));
	var th2 = document.createElement("th");
	th2.appendChild(document.createTextNode(""));
	var tbody = document.createElement("tbody");
    tbody.setAttribute("id","miTabla");

	contenido.appendChild(formulario);
	formulario.appendChild(tabla);
	tabla.appendChild(thead);
	tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(th1);
	tr.appendChild(th2);
	tabla.appendChild(tbody);

	var categorias = video.categories;
	var categoria = categorias.next();

	while(categoria.done !== true){
		var tr = document.createElement("tr");
		var tdNombre = document.createElement("td");
		var inputNombre = document.createElement("input");
		inputNombre.setAttribute("class","form-control");
		inputNombre.setAttribute("type","text");
		inputNombre.setAttribute("id","inputNombre");
		inputNombre.setAttribute("value",categoria.value.name);

		var tdDesc = document.createElement("td");
		var inputDesc = document.createElement("textarea");
		inputDesc.setAttribute("class","form-control");
		inputDesc.setAttribute("id","inputDesc");
		inputDesc.appendChild(document.createTextNode(categoria.value.description));
		inputDesc.setAttribute("cols","50");
		inputDesc.setAttribute("rows","4");
			
		var tdBoton = document.createElement("td");
		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("class","btn botonBorrar p-0");
		button.setAttribute("value",categoria.value.name);
		//button.addEventListener("click", ModificarCategoria);

		var img = document.createElement("img");
		img.setAttribute("class","img-fluid");
		img.setAttribute("src","img/modificar.png");
		img.setAttribute("alt",categoria.value.name);
		//img.setAttribute("style","width: 25px;");

		tbody.appendChild(tr);
		tr.appendChild(tdNombre);
		tdNombre.appendChild(inputNombre);
		tr.appendChild(tdDesc);
		tdDesc.appendChild(inputDesc);
		tr.appendChild(tdBoton);
		tdBoton.appendChild(button);
		button.appendChild(img);

		categoria = categorias.next();
	}
}

function ModificarCategoria(){

}

function FormEliminarCategoria(){
	var video = VideoSystem.getInstance();
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Eliminar Categoría";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var formulario = document.createElement("form");
	formulario.setAttribute("id","formulario");
	var tabla = document.createElement("table");
	tabla.setAttribute("class","table table-bordered table-hover");
	var thead = document.createElement("thead");
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.appendChild(document.createTextNode("Nombre"));
	var th1 = document.createElement("th");
	th1.appendChild(document.createTextNode(""));
	var tbody = document.createElement("tbody");
    tbody.setAttribute("id","miTabla");

	contenido.appendChild(formulario);
	formulario.appendChild(tabla);
	tabla.appendChild(thead);
	tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(th1);
	tabla.appendChild(tbody);

	var categorias = video.categories;
	var categoria = categorias.next();

	while(categoria.done !== true){
		var tr = document.createElement("tr");
		var tdNombre = document.createElement("td");
		tdNombre.setAttribute("id",categoria.value.name);
		tdNombre.appendChild(document.createTextNode(categoria.value.name));
		var td = document.createElement("td");
		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("class","btn botonBorrar p-0");
		button.setAttribute("value",categoria.value.name);
		button.addEventListener("click", EliminarCategoria);

		var img = document.createElement("img");
		img.setAttribute("class","img-fluid");
		img.setAttribute("src","img/eliminar.png");
		img.setAttribute("alt",categoria.value.name);
		img.setAttribute("style","width: 25px;");

		tbody.appendChild(tr);
		tr.appendChild(tdNombre);
		tr.appendChild(td);
		td.appendChild(button);
		button.appendChild(img);

		categoria = categorias.next();
	}
}

function EliminarCategoria(){
	var contenidoBorrar = document.getElementById(categoria.value.name);

    var categoria = new Category(contenidoBorrar,"");
    video.removeCategory(categoria);

    categoriesMenuPopulate();
}

function FormAñadirActor(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Añadir Actor";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var formulario = document.createElement("form");
	formulario.setAttribute("id","formulario");
	var p = document.createElement("p");
	p.setAttribute("id","excepcion");
	p.setAttribute("class","text-center font-weight-bold");
	var div = document.createElement("div");
	div.setAttribute("class", "form-group");
	var label = document.createElement("label");
	label.setAttribute("for","nombreA");
	label.appendChild(document.createTextNode("Nombre"));
	var input = document.createElement("input");
	input.setAttribute("type","text");
	input.setAttribute("class","form-control");
	input.setAttribute("id","nombreA");
	var pErrorNombre = document.createElement("p");
	pErrorNombre.setAttribute("id","errorNombre");
	pErrorNombre.setAttribute("class","error");

	var div2 = document.createElement("div");
	div2.setAttribute("class", "form-group");
	var label2 = document.createElement("label");
	label2.setAttribute("for","Apellido1A");
	label2.appendChild(document.createTextNode("Apellido 1"));
	var input2 = document.createElement("input");
	input2.setAttribute("type","text");
	input2.setAttribute("class","form-control");
	input2.setAttribute("id","Apellido1A");
	var pErrorAp1 = document.createElement("p");
	pErrorAp1.setAttribute("id","errorAp1");
	pErrorAp1.setAttribute("class","error");

	var div3 = document.createElement("div");
	div3.setAttribute("class", "form-group");
	var label3 = document.createElement("label");
	label3.setAttribute("for","Apellido2A");
	label3.appendChild(document.createTextNode("Apellido 2"));
	var input3 = document.createElement("input");
	input3.setAttribute("type","text");
	input3.setAttribute("class","form-control");
	input3.setAttribute("id","Apellido2A");

	var div4 = document.createElement("div");
	div4.setAttribute("class", "form-group");
	var label4 = document.createElement("label");
	label4.setAttribute("for","Date");
	label4.appendChild(document.createTextNode("Fecha de Nacimiento"));
	var input4 = document.createElement("input");
	input4.setAttribute("type","date");
	input4.setAttribute("class","form-control");
	input4.setAttribute("id","Date");
	var pErrorFecha = document.createElement("p");
	pErrorFecha.setAttribute("id","errorFecha");
	pErrorFecha.setAttribute("class","error");

	var div5 = document.createElement("div");
	div5.setAttribute("class", "form-group");
	var label5 = document.createElement("label");
	label5.setAttribute("for","Imagen");
	label5.appendChild(document.createTextNode("Imagen"));
	var input5 = document.createElement("input");
	input5.setAttribute("type","text");
	input5.setAttribute("class","form-control");
	input5.setAttribute("id","Imagen");

	var div6 = document.createElement("div");
	div6.setAttribute("class","input-group mb-3");
	var input6 = document.createElement("input");
	input6.setAttribute("type","text");
	input6.setAttribute("class","form-control");
	input6.setAttribute("placeholder","Seleccione una producción");
	var div7 = document.createElement("div");
	div7.setAttribute("class","input-group-append");
	var span = document.createElement("span");
	span.setAttribute("class","input-group-text");
	span.setAttribute("id","SelecProd");
	span.appendChild(document.createTextNode("Buscar Producción"));

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn");
	button.setAttribute("id","botonAC");
	button.appendChild(document.createTextNode("Añadir"));
	button.addEventListener("click", AñadirActor);

	contenido.appendChild(formulario);
	formulario.appendChild(p);
	formulario.appendChild(div);
	div.appendChild(label);
	div.appendChild(input);
	div.appendChild(pErrorNombre);
	formulario.appendChild(div2);
	div2.appendChild(label2);
	div2.appendChild(input2);
	div2.appendChild(pErrorAp1);
	formulario.appendChild(div3);
	div3.appendChild(label3);
	div3.appendChild(input3);
	formulario.appendChild(div4);
	div4.appendChild(label4);
	div4.appendChild(input4);
	div4.appendChild(pErrorFecha);
	formulario.appendChild(div5);
	div5.appendChild(label5);
	div5.appendChild(input5);
	formulario.appendChild(div6);
	div6.appendChild(input6);
	div6.appendChild(div7);
	div7.appendChild(span);
	formulario.appendChild(button);
}

function AñadirActor(){
	var nombre = document.getElementById("nombreA");
	var apellido1 = document.getElementById("Apellido1A");
	var apellido2 = document.getElementById("Apellido2A").value;
	var fecha = document.getElementById("Date");
	var imagen = document.getElementById("Imagen").value;
	var prod = document.getElementById("SelecProd").value;
	var errorNombre = document.getElementById("errorNombre");
	var errorAp1 = document.getElementById("errorAp1");
	var errorFecha = document.getElementById("errorFecha");
	var excepcion = document.getElementById("excepcion");

	if(nombre.value == ""){
		nombre.setAttribute("style","border-color:red");
		errorNombre.innerHTML = "El campo Nombre es obligatorio.";
	}else{
		nombre.removeAttribute("style");
		errorNombre.innerHTML = "";
	}
	
	if(apellido1.value == ""){
		apellido1.setAttribute("style","border-color:red");
		errorAp1.innerHTML = "El campo Apellido 1 es obligatorio.";	
	}else {
		apellido1.removeAttribute("style");
		errorAp1.innerHTML = "";
	}
	
	if(fecha.value == ""){
		fecha.setAttribute("style","border-color:red");
		errorFecha.innerHTML = "El campo Fecha es obligatorio.";
	}
	else{
		fecha.removeAttribute("style");
		errorFecha.innerHTML = "";
	}

	if((nombre.value !== "") && (apellido1.value !== "") && (fecha.value !== "")){
		//Añadimos el actor al sistema
		var actor = new Person(nombre.value,apellido1.value,apellido2,fecha.value,imagen);

		//Asignamos el actor a la produccion seleccionada
		//video.assignActor(actor,prod);
		try{
			video.addActor(actor);
			excepcion.innerHTML = "Actor añadido con éxito.";
		}catch(error){
			excepcion.innerHTML = error.message;
		}
	}
}

function FormModificarActor(){
	var video = VideoSystem.getInstance();
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Modificar Actor";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var formulario = document.createElement("form");
	formulario.setAttribute("id","formulario");
	var tabla = document.createElement("table");
	tabla.setAttribute("class","table table-bordered table-hover");
	var thead = document.createElement("thead");
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.appendChild(document.createTextNode("Nombre"));
	var th1 = document.createElement("th");
	th1.appendChild(document.createTextNode("Apellido 1"));
	var th2 = document.createElement("th");
	th2.appendChild(document.createTextNode("Apellido 2"));
	//var th3 = document.createElement("th");
	//th3.appendChild(document.createTextNode("Fecha Nacimiento"));
	var th4 = document.createElement("th");
	th4.appendChild(document.createTextNode("Imagen"));
	var th5 = document.createElement("th");
	th5.appendChild(document.createTextNode(""));
	var tbody = document.createElement("tbody");
    tbody.setAttribute("id","miTabla");

	contenido.appendChild(formulario);
	formulario.appendChild(tabla);
	tabla.appendChild(thead);
	tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(th1);
	tr.appendChild(th2);
	//tr.appendChild(th3);
	tr.appendChild(th4);
	tr.appendChild(th5);
	tabla.appendChild(tbody);

	var actores = video.actors;
	var actor = actores.next();

	while(actor.done !== true){
		var tr = document.createElement("tr");
		var tdNombre = document.createElement("td");
		var inputNombre = document.createElement("input");
		inputNombre.setAttribute("class","form-control");
		inputNombre.setAttribute("type","text");
		inputNombre.setAttribute("id","inputNombre");
		inputNombre.setAttribute("value",actor.value.name);

		var tdAp1 = document.createElement("td");
		var inputAp1 = document.createElement("input");
		inputAp1.setAttribute("class","form-control");
		inputAp1.setAttribute("type","text");
		inputAp1.setAttribute("id","inputAp1");
		inputAp1.setAttribute("value",actor.value.lastname1);

		var tdAp2 = document.createElement("td");
		var inputAp2 = document.createElement("input");
		inputAp2.setAttribute("class","form-control");
		inputAp2.setAttribute("type","text");
		inputAp2.setAttribute("id","inputAp2");
		inputAp2.setAttribute("value",actor.value.lastname2);

		/*var tdFecha = document.createElement("td");
		var inputFecha = document.createElement("input");
		inputFecha.setAttribute("class","form-control");
		inputFecha.setAttribute("type","date");
		inputFecha.setAttribute("id","inputFecha");
		inputFecha.setAttribute("size","2");
		inputFecha.setAttribute("value",actor.value.born.toLocaleDateString());*/

		var tdImg = document.createElement("td");
		var inputImg = document.createElement("input");
		inputImg.setAttribute("class","form-control");
		inputImg.setAttribute("type","text");
		inputImg.setAttribute("id","inputImg");
			
		var tdBoton = document.createElement("td");
		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("class","btn botonBorrar p-0");
		button.setAttribute("value",actor.value.name + " " + actor.value.lastname1);
		//button.addEventListener("click", ModificarActor);

		var img = document.createElement("img");
		img.setAttribute("class","img-fluid");
		img.setAttribute("src","img/modificar.png");
		img.setAttribute("alt",actor.value.name + " " + actor.value.lastname1);
		//img.setAttribute("style","width: 25px;");

		tbody.appendChild(tr);
		tr.appendChild(tdNombre);
		tdNombre.appendChild(inputNombre);
		tr.appendChild(tdAp1);
		tdAp1.appendChild(inputAp1);
		tr.appendChild(tdAp2);
		tdAp2.appendChild(inputAp2);
		//tr.appendChild(tdFecha);
		//tdFecha.appendChild(inputFecha);
		tr.appendChild(tdImg);
		tdImg.appendChild(inputImg);
		tr.appendChild(tdBoton);
		tdBoton.appendChild(button);
		button.appendChild(img);

		actor = actores.next();
	}
}

function ModificarActor(){

}

function FormEliminarActor(){
	var video = VideoSystem.getInstance();
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Eliminar Actor";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var formulario = document.createElement("form");
	formulario.setAttribute("id","formulario");
	var tabla = document.createElement("table");
	tabla.setAttribute("class","table table-bordered table-hover");
	var thead = document.createElement("thead");
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.appendChild(document.createTextNode("Nombre"));
	var th1 = document.createElement("th");
	th1.appendChild(document.createTextNode("Apellido"));
	var th2 = document.createElement("th");
	th2.appendChild(document.createTextNode(""));
	var tbody = document.createElement("tbody");
    tbody.setAttribute("id","miTabla");

	contenido.appendChild(formulario);
	formulario.appendChild(tabla);
	tabla.appendChild(thead);
	tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(th1);
	tr.appendChild(th2);
	tabla.appendChild(tbody);

	//Recogemos en variables el iterador de actores
	var actores = video.actors;
	var actor = actores.next();

	//Mientras existan actores...
	while(actor.done !== true){
		var tr = document.createElement("tr");
		var tdNombre = document.createElement("td");
		tdNombre.appendChild(document.createTextNode(actor.value.name));
		var tdApellido1 = document.createElement("td");
		tdApellido1.appendChild(document.createTextNode(actor.value.lastname1));
		var td = document.createElement("td");
		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("class","btn botonBorrar p-0");
		button.setAttribute("value",actor.value.name + " " + actor.value.lastname1);
		//button.addEventListener("click", EliminarCategoria);

		var img = document.createElement("img");
		img.setAttribute("class","img-fluid");
		img.setAttribute("src","img/eliminar.png");
		img.setAttribute("alt",actor.value.name + " " + actor.value.lastname1);
		img.setAttribute("style","width: 25px;");

		tbody.appendChild(tr);
		tr.appendChild(tdNombre);
		tr.appendChild(tdApellido1);
		tr.appendChild(td);
		td.appendChild(button);
		button.appendChild(img);

		actor = actores.next();
	}
}

function EliminarActor(){
	
}

function FormAñadirDirector(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Añadir Director";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var formulario = document.createElement("form");
	formulario.setAttribute("id","formulario");
	var p = document.createElement("p");
	p.setAttribute("id","excepcion");
	p.setAttribute("class","text-center font-weight-bold");
	var div = document.createElement("div");
	div.setAttribute("class", "form-group");
	var label = document.createElement("label");
	label.setAttribute("for","nombreD");
	label.appendChild(document.createTextNode("Nombre"));
	var input = document.createElement("input");
	input.setAttribute("type","text");
	input.setAttribute("class","form-control");
	input.setAttribute("id","nombreD");
	var pErrorNombre = document.createElement("p");
	pErrorNombre.setAttribute("id","errorNombre");
	pErrorNombre.setAttribute("class","error");

	var div2 = document.createElement("div");
	div2.setAttribute("class", "form-group");
	var label2 = document.createElement("label");
	label2.setAttribute("for","Apellido1D");
	label2.appendChild(document.createTextNode("Apellido 1"));
	var input2 = document.createElement("input");
	input2.setAttribute("type","text");
	input2.setAttribute("class","form-control");
	input2.setAttribute("id","Apellido1D");
	var pErrorAp1 = document.createElement("p");
	pErrorAp1.setAttribute("id","errorAp1");
	pErrorAp1.setAttribute("class","error");

	var div3 = document.createElement("div");
	div3.setAttribute("class", "form-group");
	var label3 = document.createElement("label");
	label3.setAttribute("for","Apellido2D");
	label3.appendChild(document.createTextNode("Apellido 2"));
	var input3 = document.createElement("input");
	input3.setAttribute("type","text");
	input3.setAttribute("class","form-control");
	input3.setAttribute("id","Apellido2D");

	var div4 = document.createElement("div");
	div4.setAttribute("class", "form-group");
	var label4 = document.createElement("label");
	label4.setAttribute("for","DateD");
	label4.appendChild(document.createTextNode("Fecha de Nacimiento"));
	var input4 = document.createElement("input");
	input4.setAttribute("type","date");
	input4.setAttribute("class","form-control");
	input4.setAttribute("id","DateD");
	var pErrorFecha = document.createElement("p");
	pErrorFecha.setAttribute("id","errorFecha");
	pErrorFecha.setAttribute("class","error");

	var div5 = document.createElement("div");
	div5.setAttribute("class", "form-group");
	var label5 = document.createElement("label");
	label5.setAttribute("for","ImagenD");
	label5.appendChild(document.createTextNode("Imagen"));
	var input5 = document.createElement("input");
	input5.setAttribute("type","text");
	input5.setAttribute("class","form-control");
	input5.setAttribute("id","ImagenD");

	var div6 = document.createElement("div");
	div6.setAttribute("class","input-group mb-3");
	var input6 = document.createElement("input");
	input6.setAttribute("type","text");
	input6.setAttribute("class","form-control");
	input6.setAttribute("placeholder","Seleccione una producción");
	var div7 = document.createElement("div");
	div7.setAttribute("class","input-group-append");
	var span = document.createElement("span");
	span.setAttribute("class","input-group-text");
	span.setAttribute("id","SelecProd");
	span.appendChild(document.createTextNode("Buscar Producción"));

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn");
	button.setAttribute("id","botonAC");
	button.appendChild(document.createTextNode("Añadir"));
	button.addEventListener("click", AñadirDirector);

	contenido.appendChild(formulario);
	formulario.appendChild(p);
	formulario.appendChild(div);
	div.appendChild(label);
	div.appendChild(input);
	div.appendChild(pErrorNombre);
	formulario.appendChild(div2);
	div2.appendChild(label2);
	div2.appendChild(input2);
	div2.appendChild(pErrorAp1);
	formulario.appendChild(div3);
	div3.appendChild(label3);
	div3.appendChild(input3);
	formulario.appendChild(div4);
	div4.appendChild(label4);
	div4.appendChild(input4);
	div4.appendChild(pErrorFecha);
	formulario.appendChild(div5);
	div5.appendChild(label5);
	div5.appendChild(input5);
	formulario.appendChild(div6);
	div6.appendChild(input6);
	div6.appendChild(div7);
	div7.appendChild(span);
	formulario.appendChild(button);
}

function AñadirDirector(){
	var nombre = document.getElementById("nombreD");
	var apellido1 = document.getElementById("Apellido1D");
	var apellido2 = document.getElementById("Apellido2D").value;
	var fecha = document.getElementById("DateD");
	var imagen = document.getElementById("ImagenD").value;
	var prod = document.getElementById("SelecProd").value;
	var errorNombre = document.getElementById("errorNombre");
	var errorAp1 = document.getElementById("errorAp1");
	var errorFecha = document.getElementById("errorFecha");
	var excepcion = document.getElementById("excepcion");

	if(nombre.value == ""){
		nombre.setAttribute("style","border-color:red");
		errorNombre.innerHTML = "El campo Nombre es obligatorio.";
	}else{
		nombre.removeAttribute("style");
		errorNombre.innerHTML = "";
	}
	
	if(apellido1.value == ""){
		apellido1.setAttribute("style","border-color:red");
		errorAp1.innerHTML = "El campo Apellido 1 es obligatorio.";	
	}else {
		apellido1.removeAttribute("style");
		errorAp1.innerHTML = "";
	}
	
	if(fecha.value == ""){
		fecha.setAttribute("style","border-color:red");
		errorFecha.innerHTML = "El campo Fecha es obligatorio.";
	}
	else{
		fecha.removeAttribute("style");
		errorFecha.innerHTML = "";
	}

	if((nombre.value !== "") && (apellido1.value !== "") && (fecha.value !== "")){
		//Añadimos el director al sistema
		var director = new Person(nombre.value,apellido1.value,apellido2,fecha.value,imagen);

		//Asignamos el director a la produccion seleccionada
		//video.assignDirector(director,prod);
		try{
			video.addDirector(director);
			excepcion.innerHTML = "Director añadido con éxito.";
		}catch(error){
			excepcion.innerHTML = error.message;
		}
	}
}

function FormModificarDirector(){
	var video = VideoSystem.getInstance();
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Modificar Director";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var formulario = document.createElement("form");
	formulario.setAttribute("id","formulario");
	var tabla = document.createElement("table");
	tabla.setAttribute("class","table table-bordered table-hover");
	var thead = document.createElement("thead");
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.appendChild(document.createTextNode("Nombre"));
	var th1 = document.createElement("th");
	th1.appendChild(document.createTextNode("Apellido 1"));
	var th2 = document.createElement("th");
	th2.appendChild(document.createTextNode("Apellido 2"));
	var th3 = document.createElement("th");
	th3.appendChild(document.createTextNode("Fecha Nacimiento"));
	var th4 = document.createElement("th");
	th4.appendChild(document.createTextNode("Imagen"));
	var th5 = document.createElement("th");
	th5.appendChild(document.createTextNode(""));
	var tbody = document.createElement("tbody");
    tbody.setAttribute("id","miTabla");

	contenido.appendChild(formulario);
	formulario.appendChild(tabla);
	tabla.appendChild(thead);
	tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	tr.appendChild(th4);
	tr.appendChild(th5);
	tabla.appendChild(tbody);

	var directores = video.directors;
	var director = directores.next();

	while(director.done !== true){
		var tr = document.createElement("tr");
		var tdNombre = document.createElement("td");
		var inputNombre = document.createElement("input");
		inputNombre.setAttribute("class","form-control");
		inputNombre.setAttribute("type","text");
		inputNombre.setAttribute("id","inputNombre");
		inputNombre.setAttribute("value",director.value.name);

		var tdAp1 = document.createElement("td");
		var inputAp1 = document.createElement("input");
		inputAp1.setAttribute("class","form-control");
		inputAp1.setAttribute("type","text");
		inputAp1.setAttribute("id","inputAp1");
		inputAp1.setAttribute("value",director.value.lastname1);

		var tdAp2 = document.createElement("td");
		var inputAp2 = document.createElement("input");
		inputAp2.setAttribute("class","form-control");
		inputAp2.setAttribute("type","text");
		inputAp2.setAttribute("id","inputAp2");
		inputAp2.setAttribute("value",director.value.lastname2);

		var tdFecha = document.createElement("td");
		var inputFecha = document.createElement("input");
		inputFecha.setAttribute("class","form-control");
		inputFecha.setAttribute("type","date");
		inputFecha.setAttribute("id","inputFecha");
		inputFecha.setAttribute("size","2");
		inputFecha.setAttribute("value",director.value.born.toLocaleDateString());

		var tdImg = document.createElement("td");
		var inputImg = document.createElement("input");
		inputImg.setAttribute("class","form-control");
		inputImg.setAttribute("type","text");
		inputImg.setAttribute("id","inputImg");
			
		var tdBoton = document.createElement("td");
		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("class","btn botonBorrar p-0");
		button.setAttribute("value",director.value.name + " " + director.value.lastname1);
		//button.addEventListener("click", ModificarDirector);

		var img = document.createElement("img");
		img.setAttribute("class","img-fluid");
		img.setAttribute("src","img/modificar.png");
		img.setAttribute("alt",director.value.name + " " + director.value.lastname1);
		//img.setAttribute("style","width: 25px;");

		tbody.appendChild(tr);
		tr.appendChild(tdNombre);
		tdNombre.appendChild(inputNombre);
		tr.appendChild(tdAp1);
		tdAp1.appendChild(inputAp1);
		tr.appendChild(tdAp2);
		tdAp2.appendChild(inputAp2);
		tr.appendChild(tdFecha);
		tdFecha.appendChild(inputFecha);
		tr.appendChild(tdImg);
		tdImg.appendChild(inputImg);
		tr.appendChild(tdBoton);
		tdBoton.appendChild(button);
		button.appendChild(img);

		director = directores.next();
	}
}

function ModificarDirector(){

}

function FormEliminarDirector(){
	var video = VideoSystem.getInstance();
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Eliminar Director";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var formulario = document.createElement("form");
	formulario.setAttribute("id","formulario");
	var tabla = document.createElement("table");
	tabla.setAttribute("class","table table-bordered table-hover");
	var thead = document.createElement("thead");
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.appendChild(document.createTextNode("Nombre"));
	var th1 = document.createElement("th");
	th1.appendChild(document.createTextNode("Apellido"));
	var th2 = document.createElement("th");
	th2.appendChild(document.createTextNode(""));
	var tbody = document.createElement("tbody");
    tbody.setAttribute("id","miTabla");

	contenido.appendChild(formulario);
	formulario.appendChild(tabla);
	tabla.appendChild(thead);
	tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(th1);
	tr.appendChild(th2);
	tabla.appendChild(tbody);

	//Recogemos en variables el iterador de directores
	var directores = video.directors;
	var director = directores.next();

	//Mientras existan actores...
	while(director.done !== true){
		var tr = document.createElement("tr");
		var tdNombre = document.createElement("td");
		tdNombre.appendChild(document.createTextNode(director.value.name));
		var tdApellido1 = document.createElement("td");
		tdApellido1.appendChild(document.createTextNode(director.value.lastname1));
		var td = document.createElement("td");
		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("class","btn botonBorrar p-0");
		button.setAttribute("value",director.value.name + " " + director.value.lastname1);
		//button.addEventListener("click", EliminarDirector);

		var img = document.createElement("img");
		img.setAttribute("class","img-fluid");
		img.setAttribute("src","img/eliminar.png");
		img.setAttribute("alt",director.value.name + " " + director.value.lastname1);
		img.setAttribute("style","width: 25px;");

		tbody.appendChild(tr);
		tr.appendChild(tdNombre);
		tr.appendChild(tdApellido1);
		tr.appendChild(td);
		td.appendChild(button);
		button.appendChild(img);

		director = directores.next();
	}
}

function EliminarDirector(){
	
}

function FormAñadirProd(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Añadir Producción";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var formulario = document.createElement("form");
	formulario.setAttribute("id","formulario");
	var p = document.createElement("p");
	p.setAttribute("id","excepcion");
	p.setAttribute("class","text-center font-weight-bold");
	var div = document.createElement("div");
	div.setAttribute("class", "form-group");
	var label = document.createElement("label");
	label.appendChild(document.createTextNode("Título"));
	var input = document.createElement("input");
	input.setAttribute("type","text");
	input.setAttribute("class","form-control");
	input.setAttribute("id","titulo");
	var pErrorTitulo = document.createElement("p");
	pErrorTitulo.setAttribute("id","errorTitulo");
	pErrorTitulo.setAttribute("class","error");

	var div2 = document.createElement("div");
	div2.setAttribute("class", "form-group");
	var label2 = document.createElement("label");
	label2.appendChild(document.createTextNode("Nacionalidad"));
	var input2 = document.createElement("input");
	input2.setAttribute("type","text");
	input2.setAttribute("class","form-control");
	input2.setAttribute("id","nacionalidad");

	var div3 = document.createElement("div");
	div3.setAttribute("class", "form-group");
	var label3 = document.createElement("label");
	label3.appendChild(document.createTextNode("Fecha de Publicación"));
	var input3 = document.createElement("input");
	input3.setAttribute("type","date");
	input3.setAttribute("class","form-control");
	input3.setAttribute("id","Date");
	var pErrorFecha = document.createElement("p");
	pErrorFecha.setAttribute("id","errorFecha");
	pErrorFecha.setAttribute("class","error");

	var div4 = document.createElement("div");
	div4.setAttribute("class", "form-group");
	var label4 = document.createElement("label");
	label4.appendChild(document.createTextNode("Synopsis"));
	var input4 = document.createElement("input");
	input4.setAttribute("type","text");
	input4.setAttribute("class","form-control");
	input4.setAttribute("id","synopsis");

	var div5 = document.createElement("div");
	div5.setAttribute("class", "form-group");
	var label5 = document.createElement("label");
	label5.appendChild(document.createTextNode("Imagen"));
	var input5 = document.createElement("input");
	input5.setAttribute("type","text");
	input5.setAttribute("class","form-control");
	input5.setAttribute("id","Imagen");

	var div6 = document.createElement("div");
	div6.setAttribute("class","input-group mb-3");
	var input6 = document.createElement("input");
	input6.setAttribute("type","text");
	input6.setAttribute("class","form-control");
	input6.setAttribute("placeholder","Seleccione una producción");
	var div7 = document.createElement("div");
	div7.setAttribute("class","input-group-append");
	var span = document.createElement("span");
	span.setAttribute("class","input-group-text");
	span.setAttribute("id","SelecProd");
	span.appendChild(document.createTextNode("Buscar Producción"));

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn");
	button.setAttribute("id","botonAC");
	button.appendChild(document.createTextNode("Añadir"));
	button.addEventListener("click", AñadirProd);

	contenido.appendChild(formulario);
	formulario.appendChild(p);
	formulario.appendChild(div);
	div.appendChild(label);
	div.appendChild(input);
	div.appendChild(pErrorTitulo);
	formulario.appendChild(div2);
	div2.appendChild(label2);
	div2.appendChild(input2);
	formulario.appendChild(div3);
	div3.appendChild(label3);
	div3.appendChild(input3);
	div3.appendChild(pErrorFecha);
	formulario.appendChild(div4);
	div4.appendChild(label4);
	div4.appendChild(input4);
	formulario.appendChild(div5);
	div5.appendChild(label5);
	div5.appendChild(input5);
	formulario.appendChild(div6);
	div6.appendChild(input6);
	div6.appendChild(div7);
	div7.appendChild(span);
	formulario.appendChild(button);
}

function AñadirProd(){

}

function FormEliminarProd(){
	var video = VideoSystem.getInstance();

	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Eliminar Producción";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var formulario = document.createElement("form");
	formulario.setAttribute("id","formulario");
	var tabla = document.createElement("table");
	tabla.setAttribute("class","table table-bordered table-hover");
	var thead = document.createElement("thead");
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.appendChild(document.createTextNode("Título"));
	var th1 = document.createElement("th");
	th1.appendChild(document.createTextNode(""));
	var tbody = document.createElement("tbody");
    tbody.setAttribute("id","miTabla");

	contenido.appendChild(formulario);
	formulario.appendChild(tabla);
	tabla.appendChild(thead);
	tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(th1);
	tabla.appendChild(tbody);

	//Recogemos en variables el iterador de categorias
	var categorias = video.categories;
	var categoria = categorias.next();

	while(categoria.done !== true){
		//Recogemos en variables el iterador de producciones de cada categoria
		var productions = video.getProductionsCategory(categoria.value);
		var production = productions.next();

		//Mientras existan producciones...
		while(production.done !== true){
			var tr = document.createElement("tr");
			var tdTitulo = document.createElement("td");
			tdTitulo.appendChild(document.createTextNode(production.value.title));
			var td = document.createElement("td");
			var button = document.createElement("button");
			button.setAttribute("type","button");
			button.setAttribute("class","btn botonBorrar p-0");
			button.setAttribute("value",production.value.title);
			//button.addEventListener("click", EliminarProd);

			var img = document.createElement("img");
			img.setAttribute("class","img-fluid");
			img.setAttribute("src","img/eliminar.png");
			img.setAttribute("alt",production.value.title);
			img.setAttribute("style","width: 25px;");

			tbody.appendChild(tr);
			tr.appendChild(tdTitulo);
			tr.appendChild(td);
			td.appendChild(button);
			button.appendChild(img);

			//Llamamos al iterador para pasar a la siguiente produccion
			production = productions.next();
		}
		//Llamamos al iterador para pasar a la siguiente categoria
		categoria = categorias.next();
	}
}

function EliminarProd(){

}

function FormAñadirRecurso(){

}

function AñadirRecurso(){

}

function FormEliminarRecurso(){

}

function EliminarRecurso(){
	
}