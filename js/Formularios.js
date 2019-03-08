var video = VideoSystem.getInstance();

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
	var p = document.createElement("p");
	p.setAttribute("id","excepcion");
	p.setAttribute("class","text-center font-weight-bold");
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
	formulario.appendChild(p);
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
		inputNombre.setAttribute("id","inputNombre" + categoria.value.name);
		inputNombre.setAttribute("value",categoria.value.name);

		var tdDesc = document.createElement("td");
		var inputDesc = document.createElement("textarea");
		inputDesc.setAttribute("class","form-control");
		inputDesc.setAttribute("id","inputDesc" + categoria.value.name);
		inputDesc.appendChild(document.createTextNode(categoria.value.description));
		inputDesc.setAttribute("cols","50");
		inputDesc.setAttribute("rows","4");
			
		var tdBoton = document.createElement("td");
		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("class","btn botonBorrar p-0");
		button.setAttribute("value",categoria.value.name);
		button.addEventListener("click", ModificarCategoria);

		var img = document.createElement("img");
		img.setAttribute("class","img-fluid");
		img.setAttribute("src","img/modificar.png");
		img.setAttribute("alt",categoria.value.name);

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
	var nombreCatMod = this.value;
	var nombre = document.getElementById("inputNombre" + this.value).value;
	var desc = document.getElementById("inputDesc" + this.value).value;

	var boolean = false;
	var categorias = video.categories;
	var categoria = categorias.next();

	while((categoria.done !== true) && (!boolean)){
		if (categoria.value.name == nombreCatMod) {

            categoria.value.name = nombre;
            categoria.value.description = desc;

			boolean = true;
		}
		categoria = categorias.next();
	}
	categoriesMenuPopulate();
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
	var p = document.createElement("p");
	p.setAttribute("id","excepcion");
	p.setAttribute("class","text-center font-weight-bold");
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
	formulario.appendChild(p);
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
		tdNombre.appendChild(document.createTextNode(categoria.value.name));
		var td = document.createElement("td");
		td.setAttribute("id","botonesEliminar" + categoria.value.name);
		td.setAttribute("style","width:30%;")
		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("class","btn botonBorrar p-0");
		button.setAttribute("value",categoria.value.name);
		button.addEventListener("click", BotonesEliminar);

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
	var contenidoBorrar = this.value;
	var excepcion = document.getElementById("excepcion");
	var boolean = false;

	var categorias = video.categories;
	var categoria = categorias.next();

	while((categoria.done !== true) && (!boolean)){
		if(categoria.value.name == contenidoBorrar){
			var categoriaBorrar = categoria.value;

			var productions = video.getProductionsCategory(categoria.value);
			var production = productions.next();

			//Mientras existan producciones...
			while(production.done !== true){
				video.deassignCategory(categoriaBorrar, production.value);

				production = productions.next();
			}
			encontrado = true;
		}
		categoria = categorias.next();
	}

	try{
		video.removeCategory(categoriaBorrar);
		excepcion.innerHTML = "Categoría eliminada con éxito.";

		categoriesMenuPopulate();
	}catch(error){
		excepcion.innerHTML = error.message;
	}
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
	label3.appendChild(document.createTextNode("Apellido 2"));
	var input3 = document.createElement("input");
	input3.setAttribute("type","text");
	input3.setAttribute("class","form-control");
	input3.setAttribute("id","Apellido2A");

	var div4 = document.createElement("div");
	div4.setAttribute("class", "form-group");
	var label4 = document.createElement("label");
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
	label5.appendChild(document.createTextNode("Imagen"));
	var input5 = document.createElement("input");
	input5.setAttribute("type","text");
	input5.setAttribute("class","form-control");
	input5.setAttribute("id","Imagen");

	var div6 = document.createElement("div");
	var label6 = document.createElement("label");
	label6.appendChild(document.createTextNode("Producciones"));

	var buscador = document.createElement("input");
	buscador.setAttribute("class","form-control mb-3");
	buscador.setAttribute("id","myInput");
	buscador.setAttribute("type","text");
	buscador.setAttribute("placeholder","Buscar producción...");

	var ul = document.createElement("ul");
	ul.setAttribute("class","list-group");
	ul.setAttribute("id","myList");

	var producciones = video.productions;
	var produccion = producciones.next();

	while ((produccion.done !== true)){
		var radio = document.createElement("input");
		radio.setAttribute("type","radio");
		radio.setAttribute("class","mr-1");
		radio.setAttribute("id","prodRadio");
		radio.setAttribute("name","produccion");
		radio.setAttribute("value",produccion.value.title);

		var li = document.createElement("li");
		li.setAttribute("class","list-group-item");
		
		li.appendChild(radio);
		li.appendChild(document.createTextNode(produccion.value.title));

		ul.appendChild(li);
	
		produccion = producciones.next();
	}

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
	div6.appendChild(label6);
	div6.appendChild(buscador);
	div6.appendChild(ul);
	formulario.appendChild(button);
}

function AñadirActor(){
	var nombre = document.getElementById("nombreA");
	var apellido1 = document.getElementById("Apellido1A");
	var apellido2 = document.getElementById("Apellido2A").value;
	var fecha = document.getElementById("Date");
	var imagen = document.getElementById("Imagen").value;
	var prod = $('input[name=produccion]:checked', '#formulario').val();
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
		var boolean = false;
		var producciones = video.productions;
		var produccion = producciones.next();
		
		while((produccion.done != true) && (!boolean)){
			if(produccion.value.title == prod){
				var prodAñadir = produccion.value;
				boolean = true;
			}
			produccion = producciones.next();
		}

		try{
			//Añadimos el actor al sistema
			var actor = new Person(nombre.value,apellido1.value,apellido2,new Date(fecha.value),imagen);

			video.addActor(actor);

			if(prod != undefined){
				video.assignActor(actor,prodAñadir);
			}
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
	th.setAttribute("style","width: 18%;");
	th.setAttribute("class","text-center");
	var th1 = document.createElement("th");
	th1.appendChild(document.createTextNode("Apellido 1"));
	th1.setAttribute("style","width: 18%;");
	th1.setAttribute("class","text-center");
	var th2 = document.createElement("th");
	th2.appendChild(document.createTextNode("Apellido 2"));
	th2.setAttribute("style","width: 18%;");
	th2.setAttribute("class","text-center");
	var th3 = document.createElement("th");
	th3.appendChild(document.createTextNode("Fecha Nacimiento"));
	th3.setAttribute("style","width: 18%;");
	th3.setAttribute("class","text-center");
	var th4 = document.createElement("th");
	th4.appendChild(document.createTextNode("Imagen"));
	th4.setAttribute("style","width: 21%;");
	th4.setAttribute("class","text-center");
	var th5 = document.createElement("th");
	th5.appendChild(document.createTextNode(""));
	th5.setAttribute("style","width: 7%;");
	th5.setAttribute("class","text-center");
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

	var actores = video.actors;
	var actor = actores.next();

	while(actor.done !== true){
		var tr = document.createElement("tr");
		var tdNombre = document.createElement("td");
		var inputNombre = document.createElement("input");
		inputNombre.setAttribute("class","form-control");
		inputNombre.setAttribute("type","text");
		inputNombre.setAttribute("id","inputNombre" + actor.value.lastname1);
		inputNombre.setAttribute("value",actor.value.name);

		var tdAp1 = document.createElement("td");
		var inputAp1 = document.createElement("input");
		inputAp1.setAttribute("class","form-control");
		inputAp1.setAttribute("type","text");
		inputAp1.setAttribute("id","inputAp1" + actor.value.lastname1);
		inputAp1.setAttribute("value",actor.value.lastname1);

		var tdAp2 = document.createElement("td");
		var inputAp2 = document.createElement("input");
		inputAp2.setAttribute("class","form-control");
		inputAp2.setAttribute("type","text");
		inputAp2.setAttribute("id","inputAp2" + actor.value.lastname1);
		inputAp2.setAttribute("value",actor.value.lastname2);

		var tdFecha = document.createElement("td");
		var inputFecha = document.createElement("input");
		inputFecha.setAttribute("class","form-control");
		inputFecha.setAttribute("type","text");
		inputFecha.setAttribute("id","inputFecha" + actor.value.lastname1);
		inputFecha.setAttribute("value",actor.value.born.toLocaleDateString());

		var tdImg = document.createElement("td");
		var inputImg = document.createElement("input");
		inputImg.setAttribute("class","form-control");
		inputImg.setAttribute("type","text");
		inputImg.setAttribute("id","inputImg" + actor.value.lastname1);
		inputImg.setAttribute("value",actor.value.picture);
			
		var tdBoton = document.createElement("td");
		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("class","btn botonBorrar p-0");
		button.setAttribute("value",actor.value.lastname1);
		button.addEventListener("click", ModificarActor);

		var img = document.createElement("img");
		img.setAttribute("class","img-fluid");
		img.setAttribute("src","img/modificar.png");
		img.setAttribute("alt",actor.value.name + " " + actor.value.lastname1);

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

		actor = actores.next();
	}
}

function ModificarActor(){
	var ApActorMod = this.value;
	var nombre = document.getElementById("inputNombre" + this.value).value;
	var apellido1 = document.getElementById("inputAp1" + this.value).value;
	var apellido2 = document.getElementById("inputAp2" + this.value).value;
	var fecha = document.getElementById("inputFecha" + this.value).value;
	var imagen = document.getElementById("inputImg" + this.value).value;
	
	//Creamos un array donde separamos la fecha por el simbolo seleccionado
	var arrayFecha = fecha.split("/");

	var boolean = false;
	var actores = video.actors;
	var actor = actores.next();

	while((actor.done != true) && (!boolean)){
		if(actor.value.lastname1 == ApActorMod){
			actor.value.name = nombre;
			actor.value.lastname1 = apellido1;
			actor.value.lastname2 = apellido2;
			actor.value.born = new Date(arrayFecha[2],arrayFecha[1],arrayFecha[0]);
			actor.value.picture = imagen;

			boolean = true;
		}
		actor = actores.next();
	}
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
	var p = document.createElement("p");
	p.setAttribute("id","excepcion");
	p.setAttribute("class","text-center font-weight-bold");
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
	formulario.appendChild(p);
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
		td.setAttribute("id","botonesEliminar" + actor.value.lastname1);
		td.setAttribute("style","width:30%;");
		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("class","btn botonBorrar p-0");
		button.setAttribute("value",actor.value.lastname1);
		button.addEventListener("click", BotonesEliminar);

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
	var contenidoBorrar = this.value;
	var excepcion = document.getElementById("excepcion");
	var boolean = false;

	var actores = video.actors;
	var actor = actores.next();

	while((actor.done !== true) && (!boolean)){
		if(actor.value.lastname1 == contenidoBorrar){
			var actorBorrar = actor.value;

			var productions = video.getProductionsActor(actor.value);
			var production = productions.next();

			while(production.done != true){
				video.deassignActor(actorBorrar,production.value);

				production = productions.next();
			}
			encontrado = true;
		}
		actor = actores.next();
	}

	try{
		video.removeActor(actorBorrar);
		excepcion.innerHTML = "Actor eliminado con éxito.";
	}catch(error){
		excepcion.innerHTML = error.message;
	}
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
	var label6 = document.createElement("label");
	label6.appendChild(document.createTextNode("Producciones"));

	var buscador = document.createElement("input");
	buscador.setAttribute("class","form-control mb-3");
	buscador.setAttribute("id","myInput");
	buscador.setAttribute("type","text");
	buscador.setAttribute("placeholder","Buscar producción...");

	var ul = document.createElement("ul");
	ul.setAttribute("class","list-group");
	ul.setAttribute("id","myList");

	var producciones = video.productions;
	var produccion = producciones.next();

	while ((produccion.done !== true)){
		var radio = document.createElement("input");
		radio.setAttribute("type","radio");
		radio.setAttribute("class","mr-1");
		radio.setAttribute("id","prodRadio");
		radio.setAttribute("name","produccion");
		radio.setAttribute("value",produccion.value.title);

		var li = document.createElement("li");
		li.setAttribute("class","list-group-item");
		
		li.appendChild(radio);
		li.appendChild(document.createTextNode(produccion.value.title));

		ul.appendChild(li);
	
		produccion = producciones.next();
	}

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
	div6.appendChild(label6);
	div6.appendChild(buscador);
	div6.appendChild(ul);
	formulario.appendChild(button);

	$(document).ready(function(){
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#myList li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
}

function AñadirDirector(){
	var nombre = document.getElementById("nombreD");
	var apellido1 = document.getElementById("Apellido1D");
	var apellido2 = document.getElementById("Apellido2D").value;
	var fecha = document.getElementById("DateD");
	var imagen = document.getElementById("ImagenD").value;
	var prod = $('input[name=produccion]:checked', '#myForm').val();
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
		var boolean = false;
		var producciones = video.productions;
		var produccion = producciones.next();
		
		while((produccion.done != true) && (!boolean)){
			if(produccion.value.title == prod){
				var prodAñadir = produccion.value;
				boolean = true;
			}
			produccion = producciones.next();
		}

		try{
			//Añadimos el director al sistema
			var director = new Person(nombre.value,apellido1.value,apellido2,new Date(fecha.value),imagen);

			video.addDirector(director);

			if(prod != undefined){
				video.assignDirector(director,prodAñadir);
			}
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
	th.setAttribute("style","width: 18%;");
	th.setAttribute("class","text-center");
	var th1 = document.createElement("th");
	th1.appendChild(document.createTextNode("Apellido 1"));
	th1.setAttribute("style","width: 18%;");
	th1.setAttribute("class","text-center");
	var th2 = document.createElement("th");
	th2.appendChild(document.createTextNode("Apellido 2"));
	th2.setAttribute("style","width: 18%;");
	th2.setAttribute("class","text-center");
	var th3 = document.createElement("th");
	th3.appendChild(document.createTextNode("Fecha Nacimiento"));
	th3.setAttribute("style","width: 18%;");
	th3.setAttribute("class","text-center");
	var th4 = document.createElement("th");
	th4.appendChild(document.createTextNode("Imagen"));
	th4.setAttribute("style","width: 21%;");
	th4.setAttribute("class","text-center");
	var th5 = document.createElement("th");
	th5.appendChild(document.createTextNode(""));
	th5.setAttribute("style","width: 7%;");
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
		inputNombre.setAttribute("id","inputNombre" + director.value.lastname1);
		inputNombre.setAttribute("value",director.value.name);

		var tdAp1 = document.createElement("td");
		var inputAp1 = document.createElement("input");
		inputAp1.setAttribute("class","form-control");
		inputAp1.setAttribute("type","text");
		inputAp1.setAttribute("id","inputAp1" + director.value.lastname1);
		inputAp1.setAttribute("value",director.value.lastname1);

		var tdAp2 = document.createElement("td");
		var inputAp2 = document.createElement("input");
		inputAp2.setAttribute("class","form-control");
		inputAp2.setAttribute("type","text");
		inputAp2.setAttribute("id","inputAp2" + director.value.lastname1);
		inputAp2.setAttribute("value",director.value.lastname2);

		var tdFecha = document.createElement("td");
		var inputFecha = document.createElement("input");
		inputFecha.setAttribute("class","form-control");
		inputFecha.setAttribute("type","text");
		inputFecha.setAttribute("id","inputFecha" + director.value.lastname1);
		inputFecha.setAttribute("value",director.value.born.toLocaleDateString());

		var tdImg = document.createElement("td");
		var inputImg = document.createElement("input");
		inputImg.setAttribute("class","form-control");
		inputImg.setAttribute("type","text");
		inputImg.setAttribute("id","inputImg" + director.value.lastname1);
		inputImg.setAttribute("value",director.value.picture);
			
		var tdBoton = document.createElement("td");
		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("class","btn botonBorrar p-0");
		button.setAttribute("value",director.value.lastname1);
		button.addEventListener("click", ModificarDirector);

		var img = document.createElement("img");
		img.setAttribute("class","img-fluid");
		img.setAttribute("src","img/modificar.png");
		img.setAttribute("alt",director.value.name + " " + director.value.lastname1);

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
	var ApDirectorMod = this.value;
	var nombre = document.getElementById("inputNombre" + this.value).value;
	var apellido1 = document.getElementById("inputAp1" + this.value).value;
	var apellido2 = document.getElementById("inputAp2" + this.value).value;
	var fecha = document.getElementById("inputFecha" + this.value).value;
	var imagen = document.getElementById("inputImg" + this.value).value;

	//Creamos un array donde separamos la fecha por el simbolo seleccionado
	var arrayFecha = fecha.split("/");

	var boolean = false;
	var directores = video.directors;
	var director = directores.next();

	while((director.done != true) && (!boolean)){
		if(director.value.lastname1 == ApDirectorMod){
			director.value.name = nombre;
			director.value.lastname1 = apellido1;
			director.value.lastname2 = apellido2;
			director.value.born = new Date(arrayFecha[2],arrayFecha[1],arrayFecha[0]);
			director.value.picture = imagen;

			boolean = true;
		}
		director = directores.next();
	}
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
	var p = document.createElement("p");
	p.setAttribute("id","excepcion");
	p.setAttribute("class","text-center font-weight-bold");
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
	formulario.appendChild(p);
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
		td.setAttribute("id","botonesEliminar" + director.value.lastname1);
		td.setAttribute("style","width:30%;");
		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("class","btn botonBorrar p-0");
		button.setAttribute("value",director.value.lastname1);
		button.addEventListener("click", BotonesEliminar);

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
	var contenidoBorrar = this.value;
	var excepcion = document.getElementById("excepcion");
	var boolean = false;

	var directores = video.directors;
	var director = directores.next();

	while((director.done !== true) && (!boolean)){
		if(director.value.lastname1 == contenidoBorrar){
			var directorBorrar = director.value;

			var productions = video.getProductionsDirector(director.value);
			var production = productions.next();

			while(production.done != true){
				video.deassignDirector(directorBorrar,production.value);

				production = productions.next();
			}
			encontrado = true;
		}
		director = directores.next();
	}

	try{
		video.removeDirector(directorBorrar);
		excepcion.innerHTML = "Director eliminado con éxito.";
	}catch(error){
		excepcion.innerHTML = error.message;
	}
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
	var divBotones = document.createElement("div");
	divBotones.setAttribute("class","d-flex justify-content-center");
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
	var label6 = document.createElement("label");
	label6.appendChild(document.createTextNode("Categorías"));

	var buscadorCat = document.createElement("input");
	buscadorCat.setAttribute("class","form-control mb-2");
	buscadorCat.setAttribute("id","inputCat");
	buscadorCat.setAttribute("type","text");
	buscadorCat.setAttribute("placeholder","Buscar Categoría...");

	var ulCat = document.createElement("ul");
	ulCat.setAttribute("class","list-group");
	ulCat.setAttribute("id","ListaCat");

	var categorias = video.categories;
	var categoria = categorias.next();

	while ((categoria.done !== true)){
		var radioCat = document.createElement("input");
		radioCat.setAttribute("type","checkbox");
		radioCat.setAttribute("class","mr-1 categoriaBox");
		radioCat.setAttribute("name",categoria.value.name);
		radioCat.setAttribute("value",categoria.value.name);

		var liCat = document.createElement("li");
		liCat.setAttribute("class","list-group-item");
		
		liCat.appendChild(radioCat);
		liCat.appendChild(document.createTextNode(categoria.value.name));
		ulCat.appendChild(liCat);
	
		categoria = categorias.next();
	}

	var div7 = document.createElement("div");
	div7.setAttribute("class","d-flex");

	var divActores = document.createElement("div");
	divActores.setAttribute("class","mt-3");
	divActores.setAttribute("style","width: 45%");
	var labelActores = document.createElement("label");
	labelActores.appendChild(document.createTextNode("Actores"));

	var buscadorAct = document.createElement("input");
	buscadorAct.setAttribute("class","form-control mb-2");
	buscadorAct.setAttribute("id","inputAct");
	buscadorAct.setAttribute("type","text");
	buscadorAct.setAttribute("placeholder","Buscar Actores...");

	var ulAct = document.createElement("ul");
	ulAct.setAttribute("class","list-group");
	ulAct.setAttribute("id","ListAct");

	var actores = video.actors;
	var actor = actores.next();

	while ((actor.done !== true)){
		var radioAct = document.createElement("input");
		radioAct.setAttribute("type","checkbox");
		radioAct.setAttribute("class", "mr-1 actorBox");
		radioAct.setAttribute("name",actor.value.name);
		radioAct.setAttribute("value",actor.value.name);

		var liAct = document.createElement("li");
		liAct.setAttribute("class","list-group-item");
		
		liAct.appendChild(radioAct);
		liAct.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname1));
		ulAct.appendChild(liAct);
	
		actor = actores.next();
	}

	var divDirectores = document.createElement("div");
	divDirectores.setAttribute("class","ml-5 mt-3");
	divDirectores.setAttribute("style","width: 45%");
	var labelDirectores = document.createElement("label");
	labelDirectores.appendChild(document.createTextNode("Directores"));

	var buscadorDir = document.createElement("input");
	buscadorDir.setAttribute("class","form-control mb-2");
	buscadorDir.setAttribute("id","inputDir");
	buscadorDir.setAttribute("type","text");
	buscadorDir.setAttribute("placeholder","Buscar Directores...");

	var ulDir = document.createElement("ul");
	ulDir.setAttribute("class","list-group");
	ulDir.setAttribute("id","ListDir");

	var directores = video.directors;
	var director = directores.next();

	while ((director.done !== true)){
		var radioDir = document.createElement("input");
		radioDir.setAttribute("type","checkbox");
		radioDir.setAttribute("class","mr-1 directorBox");
		radioDir.setAttribute("name",director.value.name);
		radioDir.setAttribute("value",director.value.name);

		var liDir = document.createElement("li");
		liDir.setAttribute("class","list-group-item");
		
		liDir.appendChild(radioDir);
		liDir.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname1));
		ulDir.appendChild(liDir);
	
		director = directores.next();
	}

	var div8 = document.createElement("div");
	div8.setAttribute("id","contenidoSeriesPeliculas");

	var div9 = document.createElement("div");
	div9.setAttribute("id","cuerpoBoton");

	var botonSeries = document.createElement("button");
	botonSeries.setAttribute("type","button");
	botonSeries.setAttribute("class","btn BotonSeriePelicula");
	botonSeries.setAttribute("value","series");
	botonSeries.appendChild(document.createTextNode("Series"));
	botonSeries.addEventListener("click",AñadirProd);

	var botonPeliculas = document.createElement("button");
	botonPeliculas.setAttribute("type","button");
	botonPeliculas.setAttribute("class","btn BotonSeriePelicula");
	botonPeliculas.setAttribute("value","peliculas");
	botonPeliculas.appendChild(document.createTextNode("Peliculas"));
	botonPeliculas.addEventListener("click",AñadirProd);

	contenido.appendChild(formulario);
	formulario.appendChild(divBotones);
	divBotones.appendChild(botonSeries);
	divBotones.appendChild(botonPeliculas);
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
	div6.appendChild(label6);
	div6.appendChild(buscadorCat);
	div6.appendChild(ulCat);
	formulario.appendChild(div7);
	div7.appendChild(divActores);
	divActores.appendChild(labelActores);
	divActores.appendChild(buscadorAct);
	divActores.appendChild(ulAct);
	div7.appendChild(divDirectores);
	divDirectores.appendChild(labelDirectores);
	divDirectores.appendChild(buscadorDir);
	divDirectores.appendChild(ulDir);
	formulario.appendChild(div8);
	formulario.appendChild(div9);

    $(document).ready(function(){
        $("#inputCat").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#ListaCat li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    $(document).ready(function(){
        $("#inputAct").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#ListAct li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    $(document).ready(function(){
        $("#inputDir").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#ListDir li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
}

function AñadirProd(){
	var video = VideoSystem.getInstance();
	var arrayRecursos = video.resources;
	var arraySeason = video.seasons;

	var produccion = this.value;
	var añadirCont = document.getElementById("contenidoSeriesPeliculas");
	var cuerpo = document.getElementById("cuerpoBoton");

	while (cuerpo.firstChild) {
		cuerpo.removeChild(cuerpo.firstChild);
	}

	while (añadirCont.firstChild){
        añadirCont.removeChild(añadirCont.firstChild);
	}
	
	//Boton Añadir
	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn");
	button.setAttribute("id","botonAC");
	button.appendChild(document.createTextNode("Añadir"));

	if(produccion == "series"){
		button.addEventListener("click", AñadirSerie);

		var labelTemp = document.createElement("label");
		labelTemp.setAttribute("class","mt-3");
		labelTemp.appendChild(document.createTextNode("Temporadas"));

		var ul = document.createElement("ul");
		ul.setAttribute("class","list-group");
		
		añadirCont.appendChild(labelTemp);
		añadirCont.appendChild(ul);

		//console.log(arraySeason);

		for(var i = 0; i < arraySeason.length; i++){
            var radio = document.createElement("input");
            radio.setAttribute("type","radio");
            radio.setAttribute("class","mr-1");
            radio.setAttribute("id","produccionRadio");
            radio.setAttribute("name","season");
            radio.setAttribute("value",arraySeason[i].title);

            var li = document.createElement("li");
            li.setAttribute("class","list-group-item");
            
            li.appendChild(radio);

            var pT = document.createElement("span");
            pT.appendChild(document.createTextNode(arraySeason[i].title));

            li.appendChild(pT);
          
            for(var y = 0; y < arraySeason[i].episodes.length; y++){
                var pE = document.createElement("p");
                pE.setAttribute("class","m-0 font-weight-light");
                pE.appendChild(document.createTextNode(arraySeason[i].episodes[y].title));

                var pReCu = document.createElement("p");
                pReCu.setAttribute("class","m-0 ml-3");
                pReCu.appendChild(document.createTextNode("Recurso: " + arraySeason[i].episodes[y].episode.duration + " duración"));
                
                li.appendChild(pE);
                li.appendChild(pReCu);

                if(arraySeason[i].episodes[y].episode.audios != ""){
                    var pRecuAu = document.createElement("p");
                    pRecuAu.setAttribute("class","m-0 ml-5");
                    pRecuAu.appendChild(document.createTextNode("Audios: " + arraySeason[i].episodes[y].episode.audios));
                    
                    li.appendChild(pRecuAu);
                }

                if(arraySeason[i].episodes[y].episode.subtitles != ""){
                    var pRecuSub = document.createElement("p");
                    pRecuSub.setAttribute("class","m-0 ml-5");
                    pRecuSub.appendChild(document.createTextNode("Subtitulos : " + arraySeason[i].episodes[y].episode.subtitles));
                
                    li.appendChild(pRecuSub);
                }

                for(var z = 0; z < arraySeason[i].episodes[y].scenarios.length; z++){
                    var pL = document.createElement("p");
                    pL.setAttribute("class","m-0 ml-3");
                    pL.appendChild(document.createTextNode("Localización : " + arraySeason[i].episodes[y].scenarios[z]));
                    
                    li.appendChild(pL);
                }
            }

            ul.appendChild(li);   
        }
	}
	else{
		button.addEventListener("click", AñadirPelicula);

        var labelLocations = document.createElement("label");
        labelLocations.setAttribute("for","locations");
        labelLocations.appendChild(document.createTextNode("Localización"));

        var inputLoca = document.createElement("input");
        inputLoca.setAttribute("type","text");
        inputLoca.setAttribute("id","locations");
        inputLoca.setAttribute("class","form-control");

        var pRecursos = document.createElement("p");
        pRecursos.setAttribute("class","m-0 mt-3 mb-2");
		pRecursos.appendChild(document.createTextNode("Recursos"));
		
		var pRecursosError = document.createElement("p");
        pRecursosError.setAttribute("id","errorRecursos");
        pRecursosError.setAttribute("class","error");
        
        var ul = document.createElement("ul");
        ul.setAttribute("class","list-group");

        formulario.appendChild(labelLocations);
        formulario.appendChild(inputLoca);
		formulario.appendChild(pRecursos);
		formulario.appendChild(pRecursosError);
        formulario.appendChild(ul);

        for(var i = 0; i < arrayRecursos.length; i++){
            var radio = document.createElement("input");
            radio.setAttribute("type","radio");
            radio.setAttribute("class","mr-1");
            radio.setAttribute("id","produccionRadio");
            radio.setAttribute("name","produccion");
            radio.setAttribute("value",arrayRecursos[i].duration);

            var li = document.createElement("li");
            li.setAttribute("class","list-group-item");
            
            li.appendChild(radio);

            var pD = document.createElement("span");
            pD.appendChild(document.createTextNode("Duración: " + arrayRecursos[i].duration));

            var pA = document.createElement("p");
            pA.setAttribute("class","m-0");
            pA.appendChild(document.createTextNode("Audios: " + arrayRecursos[i].audios));

            var pS = document.createElement("p");
            pS.setAttribute("class","m-0");
            pS.appendChild(document.createTextNode("Subtitulos: " + arrayRecursos[i].subtitles));

            li.appendChild(pD);
            li.appendChild(pA);
            li.appendChild(pS);

            ul.appendChild(li);
		}
	}
	cuerpo.appendChild(button);
}

function AñadirSerie(){
	var excepcion = document.getElementById("excepcion");
    var titulo = document.getElementById("titulo");
    var publicacion = document.getElementById("Date");
    var errorTitulo = document.getElementById("errorTitulo");
    var errorPubli = document.getElementById("errorFecha");
    
    var nacionalidad = document.getElementById("nacionalidad").value;
    var synopsis = document.getElementById("synopsis").value;
    var imagen = document.getElementById("Imagen").value;

	var video = VideoSystem.getInstance();
	var arraySeason = video.seasons;

    var arrayCategorias = [];
    var arrayActores = [];
    var arrayDirectores = [];

    $('.categoriaBox:checked').each(
        function() {
            arrayCategorias.push($(this).val());
        }
    );

    $('.actorBox:checked').each(
        function() {
            arrayActores.push($(this).val());
        }
    );

    $('.directorBox:checked').each(
        function() {
            arrayDirectores.push($(this).val());
        }
    );

    var radioSeason = $('input[name=season]:checked', '#formulario').val();

    if(titulo.value == ""){
        titulo.setAttribute("style","border-color: red");
        errorTitulo.innerHTML = "El campo título es obligatorio";
    }else{
        titulo.removeAttribute("style");
        errorTitulo.innerHTML = "";
    }

    if(publicacion.value == ""){
        publicacion.setAttribute("style","border-color: red");
        errorPubli.innerHTML = "El campo publicación es obligatorio";
    }else{
        publicacion.removeAttribute("style");
        errorPubli.innerHTML = "";
    }

    if((titulo.value != "") && (publicacion.value  != "")){

        var arrayCategoriasAsociar = [];

        for(var i = 0; i < arrayCategorias.length; i++){
            var boolean = false;
            var categorias = video.categories;
            var categoria = categorias.next();

            while ((categoria.done !== true) && (!boolean)){
                if (categoria.value.name == arrayCategorias[i]) {

                    arrayCategoriasAsociar.push(categoria.value);

                    boolean = true;
                }
                categoria = categorias.next();
            }
        }

        var arrayActorAsociar = [];

        for(var i = 0; i < arrayActores.length; i++){
            var boolean = false;
            var actores = video.actors;
            var actor = actores.next();

            while ((actor.done !== true) && (!boolean)){
                if (actor.value.name == arrayActores[i]) {

                    arrayActorAsociar.push(actor.value);
            
                    boolean = true;
                }
                actor = actores.next();
            }
        }

        var arrayDirectorAsociar = [];

        for(var i = 0; i < arrayDirectores.length; i++){
            var boolean = false;
            var directores = video.directors;
            var director = directores.next();

            while ((director.done !== true) && (!boolean)){
                if (director.value.name == arrayDirectores[i]) {

                    arrayDirectorAsociar.push(director.value);
            
                    boolean = true;
                }
                director = directores.next();
            }
        }

        var arraySeasonAsignar = []; 

        if(radioSeason != undefined){
            for(var i = 0; i < arraySeason.length; i++){
                if(radioSeason == arraySeason[i].title){
                    var season = arraySeason[i];
                }
            }
            
            arraySeasonAsignar.push(season);
        }

        try{
            var serie = new Serie(titulo.value,nacionalidad,new Date(publicacion.value),synopsis,imagen,arraySeasonAsignar);

            video.addProduction(serie);

            for(let i = 0; i < arrayCategoriasAsociar.length; i++){
                video.assignCategory(arrayCategoriasAsociar[i],serie);
            }

            for(let i = 0; i < arrayActorAsociar.length; i++){
                video.assignActor(arrayActorAsociar[i],serie);
            }

            for(let i = 0; i < arrayDirectorAsociar.length; i++){
                video.assignDirector(arrayDirectorAsociar[i],serie);
            }

            excepcion.innerHTML = "Serie añadida con éxito.";
        }catch(error){
            excepcion.innerHTML = error.message;
        }

    }
}

function AñadirPelicula(){
    var excepcion = document.getElementById("excepcion");
    var titulo = document.getElementById("titulo");
    var publicacion = document.getElementById("Date");
    var errorTitulo = document.getElementById("errorTitulo");
    var errorPubli = document.getElementById("errorFecha");
    
    var nacionalidad = document.getElementById("nacionalidad").value;
    var synopsis = document.getElementById("synopsis").value;
    var imagen = document.getElementById("Imagen").value;

	var video = VideoSystem.getInstance();
	var arrayRecursos = video.resources;

    var arrayCategorias = [];
    var arrayActores = [];
    var arrayDirectores = [];

    $('.categoriaBox:checked').each(
        function() {
            arrayCategorias.push($(this).val());
        }
    );

    $('.actorBox:checked').each(
        function() {
            arrayActores.push($(this).val());
        }
    );

    $('.directorBox:checked').each(
        function() {
            arrayDirectores.push($(this).val());
        }
    );

    var localizacion = document.getElementById("locations").value;
    var arrayLoca = localizacion.split(",");

    var radioRecurso = $('input[name=produccion]:checked', '#formulario').val();
    var errorRecurso = document.getElementById("errorRecursos");

    if(titulo.value == ""){
        titulo.setAttribute("style","border-color: red");
        errorTitulo.innerHTML = "El campo titulo es obligatorio";
    }else{
        titulo.removeAttribute("style");
        errorTitulo.innerHTML = "";
    }

    if(publicacion.value == ""){
        publicacion.setAttribute("style","border-color: red");
        errorPubli.innerHTML = "El campo publicación es obligatorio";
    }else{
        publicacion.removeAttribute("style");
        errorPubli.innerHTML = "";
    }

    if(radioRecurso == undefined){
        errorRecurso.innerHTML = "Debes marcar un recurso";
    }else{
        errorRecurso.innerHTML = "";
    }

    if((titulo.value != "") && (publicacion.value  != "") && (radioRecurso != undefined)){

        var arrayCategoriasAsociar = [];

        for(var i = 0; i < arrayCategorias.length; i++){
            var boolean = false;
            var categorias = video.categories;
            var categoria = categorias.next();

            while ((categoria.done !== true) && (!boolean)){
                if (categoria.value.name == arrayCategorias[i]) {

                    arrayCategoriasAsociar.push(categoria.value);

                    boolean = true;
                }
                categoria = categorias.next();
            }
        }

        var arrayActorAsociar = [];

        for(var i = 0; i < arrayActores.length; i++){
            var boolean = false;
            var actores = video.actors;
            var actor = actores.next();

            while ((actor.done !== true) && (!boolean)){
                if (actor.value.name == arrayActores[i]) {

                    arrayActorAsociar.push(actor.value);
            
                    boolean = true;
                }
                actor = actores.next();
            }
        }

        var arrayDirectorAsociar = [];

        for(var i = 0; i < arrayDirectores.length; i++){
            var boolean = false;
            var directores = video.directors;
            var director = directores.next();

            while ((director.done !== true) && (!boolean)){
                if (director.value.name == arrayDirectores[i]) {

                    arrayDirectorAsociar.push(director.value);
            
                    boolean = true;
                }
                director = directores.next();
            }
        }

        for(var i = 0; i < arrayRecursos.length; i++){
            if(radioRecurso == arrayRecursos[i].duration){
                var recurso = arrayRecursos[i];
            }
        }
        
        try{
            var movie = new Movie(titulo.value,nacionalidad,new Date(publicacion.value),synopsis,imagen,recurso,new Coordinate(arrayLoca[0],arrayLoca[1]));

            video.addProduction(movie);

            for(let i = 0; i < arrayCategoriasAsociar.length; i++){
                video.assignCategory(arrayCategoriasAsociar[i],movie);
            }

            for(let i = 0; i < arrayActorAsociar.length; i++){
                video.assignActor(arrayActorAsociar[i],movie);
            }

            for(let i = 0; i < arrayDirectorAsociar.length; i++){
                video.assignDirector(arrayDirectorAsociar[i],movie);
            }

            excepcion.innerHTML = "Pelicula añadida con éxito.";
        }catch(error){
            excepcion.innerHTML = error.message;
        }

    }
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
	var p = document.createElement("p");
	p.setAttribute("id","excepcion");
	p.setAttribute("class","text-center font-weight-bold");
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
	formulario.appendChild(p);
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
			td.setAttribute("id","botonesEliminar" + production.value.title);
			td.setAttribute("style","width:30%;");
			var button = document.createElement("button");
			button.setAttribute("type","button");
			button.setAttribute("class","btn botonBorrar p-0");
			button.setAttribute("value",production.value.title);
			button.addEventListener("click", BotonesEliminar);

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
	var contenidoBorrar = this.value;
	var excepcion = document.getElementById("excepcion");
	var boolean = false;

	var producciones = video.productions;
	var produccion = producciones.next();

	while((produccion.done != true) && (!boolean)){
		if(produccion.value.title == contenidoBorrar){
			var prodBorrar = produccion.value;

			var categorias = video.categories;
			var categoria = categorias.next();

			while(categoria.done != true){
				var productions = video.getProductionsCategory(categoria.value);
				var production = productions.next();

				while(production.done != true){
					if(production.value.title === contenidoBorrar){
						video.deassignCategory(categoria.value,prodBorrar);
					}
					production = productions.next();
				}
				categoria = categorias.next();
			}

			var elenco = video.getCast(produccion.value);
			var actor = elenco.next();
			while(actor.done != true){
				video.deassignActor(actor.value, prodBorrar);
				actor = elenco.next();
			}

			var directores = video.directors;
			var director = directores.next();
			while(director.done != true){
				var productions = video.getProductionsDirector(director.value);
				var production = productions.next();

				while(production.done != true){
					if(production.value.title === contenidoBorrar){
						video.deassignDirector(director.value,prodBorrar);
					}
					production = productions.next();
				}
				director = directores.next();
			}
			boolean = true;
		}
		director = directores.next();
	}

	try{
		video.removeProduction(prodBorrar);
		excepcion.innerHTML = "Producción eliminada con éxito.";
	}catch(error){
		excepcion.innerHTML = error.message;
	}
}

function FormAñadirRecurso(){

}

function AñadirRecurso(){

}

function FormEliminarRecurso(){

}

function EliminarRecurso(){
	
}

function BotonesEliminar(){
	var tdCambiar = document.getElementById("botonesEliminar" + this.value);
	var valorBoton = this.value; //Recogemos el valor del boton para eliminar

	var titulo = document.getElementById("tituloprincipal").innerHTML;
	var comprobar = titulo.substring(9,10).trim();

	while(tdCambiar.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		tdCambiar.removeChild(tdCambiar.firstChild); 
	}
	var buttonA = document.createElement("button");
	buttonA.setAttribute("type","button");
	buttonA.setAttribute("class","btn botonAceptarCancelar");
	buttonA.setAttribute("value",valorBoton);
	buttonA.appendChild(document.createTextNode("Aceptar"));

	if(comprobar == "C"){
		buttonA.addEventListener("click", EliminarCategoria);
	}
	
	if(comprobar == "A"){
		buttonA.addEventListener("click", EliminarActor);
	}

	if(comprobar == "D"){
		buttonA.addEventListener("click", EliminarDirector);
	}

	if(comprobar == "P"){
		buttonA.addEventListener("click", EliminarProd);
	}

	var buttonC = document.createElement("button");
	buttonC.setAttribute("type","button");
	buttonC.setAttribute("class","btn botonAceptarCancelar");
	buttonC.setAttribute("value",valorBoton);
	buttonC.appendChild(document.createTextNode("Cancelar"));
	buttonC.addEventListener("click", MostrarPapelera);

	tdCambiar.appendChild(buttonA);
	tdCambiar.appendChild(buttonC);
}

function MostrarPapelera(){
	var tdCambiar = document.getElementById("botonesEliminar" + this.value);
	var valorBoton = this.value; //Recogemos el valor del boton para eliminar

	while(tdCambiar.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		tdCambiar.removeChild(tdCambiar.firstChild); 
	}

	var button = document.createElement("button");
	button.setAttribute("type","button");
	button.setAttribute("class","btn botonBorrar p-0");
	button.setAttribute("value",valorBoton);
	button.addEventListener("click", BotonesEliminar);

	var img = document.createElement("img");
	img.setAttribute("class","img-fluid");
	img.setAttribute("src","img/eliminar.png");
	img.setAttribute("alt",valorBoton);
	img.setAttribute("style","width: 25px;");

	tdCambiar.appendChild(button);
	button.appendChild(img);
}