function initPopulate(){
	//Creamos los objetos Person
	var persona = new Person("Blanca","Suarez","",new Date(1990,05,10),"https://es.wikipedia.org/wiki/Blanca_Su%C3%A1rez");
	var persona1 = new Person("Anna","Fernandez","",new Date(1990,03,04),"https://es.wikipedia.org/wiki/Ana_Fern%C3%A1ndez_Garc%C3%ADa");		var persona2 = new Person("Ana","Polvorosa","",new Date(1991,11,25),"https://es.wikipedia.org/wiki/Ana_Mar%C3%ADa_Polvorosa");
	var persona3 = new Person("Nadia","De Santiago","",new Date(1991,01,23),"https://es.wikipedia.org/wiki/Nadia_de_Santiago");
	var persona4 = new Person("Maggie","Civantos","",new Date(1985,09,12),"https://es.wikipedia.org/wiki/Maggie_Civantos");
	var persona5 = new Person("Martiño","Rivas","",new Date(1985,01,10),"https://es.wikipedia.org/wiki/Marti%C3%B1o_Rivas");
	var persona6 = new Person("Yon","Gonzalez","",new Date(1986,05,20),"https://es.wikipedia.org/wiki/Yon_Gonz%C3%A1lez");
	var persona7 = new Person("Sergio","Mur","",new Date(1977,05,23),"https://es.wikipedia.org/wiki/Sergio_Mur");
		
	var persona8 = new Person("Steven","Spielberg","",new Date(1946,12,18),"https://es.wikipedia.org/wiki/Steven_Spielberg");
	var persona9 = new Person("James","Cameron","",new Date(1954,08,16),"https://es.wikipedia.org/wiki/James_Cameron");
	var persona10 = new Person("Quentin","Tarantino","",new Date(1963,03,27),"https://es.wikipedia.org/wiki/Quentin_Tarantino");
	var persona11 = new Person("Peter","Jackson","",new Date(1961,10,31),"https://es.wikipedia.org/wiki/Peter_Jackson");
		
	//Creamos las categorias del sistema
	var category = new Category("Terror","Es un género cinematográfico que se caracteriza por su voluntad de provocar en el espectador sensaciones de pavor, terror, miedo, disgusto.");
	var category1 = new Category("Acción","Es un género cinematográfico en el que prima la espectacularidad de las imágenes por medio de efectos especiales de estilo clásico.");
	var category3 = new Category("Romántico","Es un género cinematográfico que se caracteriza por retratar argumentos construidos de eventos y personajes relacionados con la expresión del amor y las relaciones románticas.");
	var category4 = new Category("Animación","Es un género cinematográfico que se caracteriza por no recurrir a la técnica del rodaje de imágenes reales sino a una o más técnicas de animación.");
	var category5 = new Category("Infantiles","Es un género cinematográfico destinado a un público de corta edad, adaptada a sus intereses y a su nivel de comprensión.");
	var category6 = new Category("Musicales","Alude a todas aquellas producciones cinematográficas que incluyen canciones o temas musicales bailables en una parte fundamental del desarrollo argumental de la misma.");

	//Creamos los recursos del sistema
	var resource = new Resource(180,"http://www.recurso.com",["Español","Ingles"],["Ingles","Español"]);
	var resource1 = new Resource(210,"http://www.recurso1.com",["Español","Ingles"],["Ingles","Español"]);
	var resource2 = new Resource(188,"http://www.recurso2.com",["Español","Ingles"],["Ingles","Español"]);

	//Creamos las coordenadas del sistema
	var coor = new Coordinate(90,130);
		
	//Creamos las peliculas del sistema
	var movie = new Movie("La noche de Hallowen","Estadounidense",new Date(2018,10,07),
	"Jamie Lee Curtis regresa a su icónico personaje Laurie Strode, quien llega a la confrontación final con Michael Myers, la figura enmascarada que la ha perseguido desde que escapó de la matanza que él cometió la noche de Halloween de hace cuatro décadas. Nueva entrega de Halloween, secuela directa de la original de 1978.",
	"https://www.filmaffinity.com/es/film122880.html",resource,coor);
	var movie1 = new Movie("La Monja","Estadounidense",new Date(2018,10,11),
	"Cuando una joven monja se suicida en una abadía de clausura en Rumanía, un sacerdote experto en posesiones demoniacas y una novicia a punto de tomar sus votos, son enviados por el Vaticano para investigar. Juntos descubren el profano secreto de la orden. Arriesgando no solo sus propias vidas sino su fe y hasta sus almas, se enfrentan a una fuerza maléfica en forma de monja demoníaca, en una abadía que se convierte en un campo de batalla de horror entre los vivos y los condenados.",
	"https://www.filmaffinity.com/es/film211433.html",resource1,coor);
	var movie2 = new Movie("Vengadores Infinity War","Estadounidense",new Date(2018,10,11),
	"El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo.",
	"https://www.filmaffinity.com/es/film827414.html",resource2,coor);
	var movie3 = new Movie("Mission Impossible Fallout","Estadounidense",new Date(2018,10,11),
	"Sexta entrega de la saga. En esta ocasión presenta a Ethan Hunt (Tom Cruise) y su equipo IMF (Alec Baldwin, Simon Pegg, Ving Rhames), con algunos aliados conocidos (Rebecca Ferguson, Michelle Monaghan), en una lucha contrarreloj después de que una misión salga mal.",
	"https://www.filmaffinity.com/es/film286514.html",resource,coor);
	var movie4 = new Movie("Crepúsculo","Estadounidense",new Date(2008,10,11),
	"La joven Bella Swan (Kristen Stewart) siempre fue una chica muy diferente ya en sus años de niña en Phoenix. Cuando su madre se volvió a casar, la mandó a vivir con su padre, a la pequeña y lluviosa ciudad de Forks, Washington, una población sin ningún aliciente para Bella. Pero entonces conoce en el instituo al misterioso y atractivo Edward Cullen (Robert Pattinson), un joven distinto a los demás que esconde un secreto...",
	"https://www.filmaffinity.com/es/film146914.html",resource1,coor);
	var movie5 = new Movie("El diario de Noa","Estadounidense",new Date(2004,10,11),
	"En una residencia de ancianos, un hombre (James Garner) lee a una mujer (Gena Rowlands) una historia de amor escrita en su viejo cuaderno de notas. Es la historia de Noah Calhoun (Ryan Gosling) y Allie Hamilton (Rachel McAdams), dos jóvenes adolescentes de Carolina del Norte que, a pesar de vivir en dos ambientes sociales muy diferentes, se enamoraron profundamente y pasaron juntos un verano inolvidable, antes de ser separados, primero por sus padres, y más tarde por la guerra.",
	"https://www.filmaffinity.com/es/film738597.html",resource2,coor);
	var movie6 = new Movie("Los Increíbles 2","Estadounidense",new Date(2018,10,11),
	"Secuela de Los increíbles. Helen tiene que liderar una campaña para que los superhéroes regresen, mientras Bob vive su vida normal con Violet, Dash y el bebé Jack-Jack —cuyos superpoderes descubriremos—. Su misión se va a pique cuando aparece un nuevo villano con un brillante plan que lo amenaza todo. Pero los Parr no se amedrentarán y menos teniendo a Frozone de su parte.",
	"https://www.filmaffinity.com/es/film596458.html",resource,coor);
	var movie7 = new Movie("Gru, mi villano favorito","Estadounidense",new Date(2010,10,11),
	"Gru (voz de Steve Carell) es un hombre deplorable que planea el acto criminal más increíble de la Historia: robar la Luna. Incitado por una madre malvada (voz de Julie Andrews), sólo encontrará un obstáculo en su camino: tres niñas huérfanas a las que tendá que cuidar temporalmente.",
	"https://www.filmaffinity.com/es/film203645.html",resource1,coor);
	var movie8 = new Movie("The Grinch","Estadounidense",new Date(2018,10,11),
	"Cada año, en Navidad, los lugareños perturban su pacífica soledad con celebraciones cada vez más desmesuradas, luminosas y ruidosas. Cuando los Quién declaran que ese año van a preparar una Navidad el triple de grande, el Grinch se da cuenta de que solo hay un modo de recuperar algo de paz y silencio: robar la Navidad. Para ello, decide hacerse pasar por Santa Claus en Nochebuena, haciéndose con un reno muy peculiar para tirar de su trineo. ",
	"https://www.filmaffinity.com/es/film147835.html",resource2,coor);
	var movie9 = new Movie("Alicia en el país de las maravillas","Estadounidense",new Date(1951,10,11),
	"Historia de magia y fantasía en la que la joven Alicia se sumerge en el sorprendente País de las Maravillas y conoce a extraordinarios personajes como Tweedledee y Tweedledum, el Sombrerero Loco, La Reina de Corazones y el frenético Conejo Blanco. ",
	"https://www.filmaffinity.com/es/film117518.html",resource,coor);
	var movie10 = new Movie("Mamma Mia!","Reino Unido",new Date(2008,10,11),
	"Sophie Sheridan (Amanda Seyfried) es una chica de veinte años residente en el hotel de su madre, situado en una isla griega, que está a punto de casarse con Sky (Dominic Cooper). Su madre, Donna (Meryl Streep), nunca le ha dicho quién es su padre.",
	"https://www.filmaffinity.com/es/reviews/1/336014.html?orderby=6",resource1,coor);
	var movie11 = new Movie("High School Musical","Estadounidense",new Date(2006,10,11),
	"Durante unas vacaciones de Navidad, los jóvenes Troy y Gabriella (dos adolescentes en principo con pocas cosas en común) se conocen. Ambos descubren su interés mutuo por la música durante un concurso de karaoke, y deciden presentarse al casting del musical del instituto.",
	"https://www.filmaffinity.com/es/film407428.html",resource2,coor);

	//Creamos los usuarios del sistema
	var user = new User("Inma","inma@inma.com","contra1");
	var user1 = new User("Maria","maria@maria.com","contra1");
	var user2 = new User("Jesus","jesus@jesus.com","contra1");

	//Creamos las sesiones del sistema
	var season = new Season("Temporada 1",[
		{title:'Episodio 1',episode: resource, scenarios:[new Coordinate(14,20)]},
		{title:'Episodio 2',episode: resource1, scenarios:[new Coordinate(14,30)]}
	]);
	var season1 = new Season("Temporada 2",[
		{title:'Episodio 1',episode: resource1, scenarios:[new Coordinate(14,20)]},
		{title:'Episodio 2',episode: resource2, scenarios:[new Coordinate(14,30)]}
	]);

	//Creamos las series del sistema
	var serie = new Serie("Stranger Things","Estadounidense",new Date(2016,07,15),
	"La historia arranca durante la década de los 80, en el ficticio pueblo de Hawkins, Indiana, cuando un niño llamado Will Byers desaparece, hecho que destapa los extraños sucesos que tienen lugar en la zona, producto de una serie de experimentos que realiza el gobierno en un laboratorio científico cercano. Además, en la ciudad aparecen fuerzas sobrenaturales inquietantes y una niña muy extraña. Ella, junto con los amigos de Will, se encargará de buscarlo, sin imaginar lo que tendrán que enfrentar para encontrarlo. ",
	"https://es.wikipedia.org/wiki/Stranger_Things",[season,season1]);
	var serie1 = new Serie("Black Mirror","Reino Unido",new Date(2011,12,04),
	"Black Mirror es una producción británica desarrollada por Charlie Brooker ('Dead set: Muerte en directo'), Una serie de episodios independientes entre sí y, con un reparto y tramas totalmente diferentes, cuyo único punto común es el poder de las nuevas tecnologías para mover el mundo.",
	"https://es.wikipedia.org/wiki/Black_Mirror",[season,season1]);
	var serie2 = new Serie("Juego de Tronos","Estadounidense",new Date(2011,04,17),
	"Relata las vivencias de un grupo de personajes de diferentes familias nobiliarias en el continente ficticio Poniente para hacerse del control del Trono de Hierro y así gobernar los Siete Reinos que conforman al territorio.",
	"https://es.wikipedia.org/wiki/Game_of_Thrones_(serie_de_televisi%C3%B3n)",[season,season1]);
	var serie3 = new Serie("Vikings","Irlanda",new Date(2013,03,03),
	"Vikings es una serie que está basada en las leyendas sobre el vikingo Ragnar Lodbrok, (Travis Fimmel) uno de los héroes más famosos de la cultura nórdica que saqueó Northumbria, Francia y Bretaña. La serie retrata a Lodbrok como un guerrero curioso y navegante, tecnológicamente innovador, ambicioso y rebelde, que hace construir un barco a su amigo Floki, para lanzarse a explorar los territorios al oeste de Escandinavia desobedeciendo al jefe tribal, el Jarl (Conde) Haraldson, que ordena viajar hacia el este.",
	"https://es.wikipedia.org/wiki/Vikings_(serie_de_televisi%C3%B3n)",[season,season1]);
	var serie4 = new Serie("Velvet","Española",new Date(2014,02,17),
	"En la España de 1958 hay un lugar al que todo el mundo desearía ir de compras al menos una vez en la vida: las Galerías Velvet. Ubicadas en el número 34 de la Gran Vía madrileña, entre sus paredes se encuentran los trajes más elegantes y caros del momento, pero sobre todo se esconde una de las historias de amor que se haya contado jamás: la de Ana y Alberto. Ella, una humilde costurera que trabaja en las galerías desde que era niña. Él, un joven y apuesto muchacho destinado a heredar el majestuoso imperio de la moda que hasta ahora gobierna su padre, Don Rafael Márquez.",
	"https://es.wikipedia.org/wiki/Velvet_(serie_de_televisi%C3%B3n)",[season,season1]);
	var serie5 = new Serie("Gran Hotel","Española",new Date(2011,10,04),
	"Los acontecimientos transcurren en 1905. Julio Olmedo (Yon González), un joven de origen humilde, llega hasta el idílico Gran Hotel, situado a las afueras de un pueblo llamado Cantaloa, para visitar a su hermana Cristina (Paula Prendes) que trabaja en el mismo como encargada de planta. Allí, Julio descubrirá que hace más de un mes que nadie sabe nada de ella (tras ser expulsada del hotel por el supuesto robo a un cliente). Julio decide quedarse como camarero e investigar su desaparición. De este modo irá conociendo al personal y entablará una relación con Alicia Alarcón (Amaia Salamanca), una de las hijas de doña Teresa (Adriana Ozores), la propietaria del hotel.",
	"https://es.wikipedia.org/wiki/Gran_Hotel_(serie_de_televisi%C3%B3n)",[season,season1]);
	var serie6 = new Serie("Los Simpson","Estadounidense",new Date(1989,12,18),
	"La serie es una sátira de la sociedad estadounidense que narra la vida y el día a día de una familia de clase media de ese país (cuyos miembros son Homer, Marge, Bart, Lisa y Maggie Simpson) que vive en un pueblo ficticio llamado Springfield.",
	"https://es.wikipedia.org/wiki/Los_Simpson",[season,season1]);
	var serie7 = new Serie("Padre de familia","Estadounidense",new Date(1999,01,31),
	" La serie se centra en los Griffin, una familia disfuncional cuyos componentes son: los padres Peter y Lois; sus hijos Meg, Chris, y Stewie; y su perro antropomorfo Brian. La serie está situada en la ciudad ficticia de Quahog, Rhode Island.",
	"https://es.wikipedia.org/wiki/Padre_de_familia",[season,season1]);
	var serie8 = new Serie("Peppa Pig","Reino Unido",new Date(2004,05,31),
	"La protagonista de esta serie es Peppa, una cerdita de rasgos antropomorfos que vive con su hermanito George y sus padres: Mamá Pig (Mummy Pig) y Papá Pig (Daddy Pig). Tiene como escenario principal su hogar, donde ocurre la mayoría de las tramas de los episodios. En algunos de ellos se muestra a su familia saliendo de casa, paseando en coche, yendo a casa de sus amigos o estando ya en otro lugar.",
	"https://es.wikipedia.org/wiki/Peppa_Pig",[season,season1]);
	var serie9 = new Serie("Pocoyó","Reino Unido/España",new Date(2005,01,28),
	"Narra las aventuras de un niño en edad de preescolar llamado Pocoyó, que está descubriendo el mundo e interactuando con él. Le acompañan sus amigos, Pato, Elly, Pajaroto (en la versión para Latinoamérica algunas veces recibe el nombre de Pájaro dormilón) y su mascota Loula.",
	"https://es.wikipedia.org/wiki/Pocoy%C3%B3",[season,season1]);
	var serie10 = new Serie("Dreamland","Española",new Date(2014,03,28),
	"La serie nos muestra la vida de Jacobo, Hugo, Ángela, Rosa y Moisés, artistas seleccionados para ingresar en Dreamland, una escuela en la que perfeccionar su destacado talento. Todos cantan, bailan, componen e interpretan canciones, y en Dreamland contarán con una gran formación, para enseñar lo mejor de cada uno de ellos.",
	"https://es.wikipedia.org/wiki/Dreamland_(serie_de_televisi%C3%B3n)",[season,season1]);
	var serie11 = new Serie("Nashville","Estadounidense",new Date(2012,10,10),
	"La serie narra la vida de varios cantantes de música country ficticios en Nashville, Tennessee protagonizada por Connie Britton como Rayna Jaymes, una legendaria superestrella de la música country, cuyo estrellato comienza a desvanecerse, y Hayden Panettiere como Juliette Barnes. Britton Britton dejó el show en la temporada cinco.",
	"https://es.wikipedia.org/wiki/Nashville_(serie_de_televisi%C3%B3n)",[season,season1]);

	/* INICIO DE LAS FUNCIONES DE VIDEOSYSTEM */
	var video = VideoSystem.getInstance();
	video.name = "VIDEOCLUB METRO";
		
	//Añadimos las categorias
	video.addCategory(category);
	video.addCategory(category1);
	video.addCategory(category3);
	video.addCategory(category4);
	video.addCategory(category5);
	video.addCategory(category6);

	//Añadimos los usuarios
	video.addUser(user);
	video.addUser(user1);
	video.addUser(user2);

	//Añadimos las producciones
	video.addProduction(movie);
	video.addProduction(movie1);
	video.addProduction(movie2);
	video.addProduction(movie3);
	video.addProduction(movie4);
	video.addProduction(movie5);
	video.addProduction(movie6);
	video.addProduction(movie7);
	video.addProduction(movie8);
	video.addProduction(movie9);
	video.addProduction(movie10);
	video.addProduction(movie11);
	video.addProduction(serie);
	video.addProduction(serie1);
	video.addProduction(serie2);
	video.addProduction(serie3);
	video.addProduction(serie4);
	video.addProduction(serie5);
	video.addProduction(serie6);
	video.addProduction(serie7);
	video.addProduction(serie8);
	video.addProduction(serie9);
	video.addProduction(serie10);
	video.addProduction(serie11);
		
	//Añadimos los actores
	video.addActor(persona);
	video.addActor(persona1);
	video.addActor(persona2);
	video.addActor(persona3);
	video.addActor(persona4);
	video.addActor(persona5);
	video.addActor(persona6);
	video.addActor(persona7);
		
	//Añadimos los directores
	video.addDirector(persona8);
	video.addDirector(persona9);
	video.addDirector(persona10);
	video.addDirector(persona11);
		
	//Asignamos la produccion a alguna categoria
	video.assignCategory(category,movie);
	video.assignCategory(category,movie1);
	video.assignCategory(category,serie);
	video.assignCategory(category,serie1);
	video.assignCategory(category1,movie2);
	video.assignCategory(category1,movie3);
	video.assignCategory(category1,serie2);
	video.assignCategory(category1,serie3);
	video.assignCategory(category3,movie4);
	video.assignCategory(category3,movie5);
	video.assignCategory(category3,serie4);
	video.assignCategory(category3,serie5);
	video.assignCategory(category4,movie6);
	video.assignCategory(category4,movie7);
	video.assignCategory(category4,serie6);
	video.assignCategory(category4,serie7);
	video.assignCategory(category5,movie8);
	video.assignCategory(category5,movie9);
	video.assignCategory(category5,serie8);
	video.assignCategory(category5,serie9);
	video.assignCategory(category6,movie10);
	video.assignCategory(category6,movie11);
	video.assignCategory(category6,serie10);
	video.assignCategory(category6,serie11);


	//Asignamos la produccion a algun director
	video.assignDirector(persona8,movie);
	video.assignDirector(persona9,movie1);
	video.assignDirector(persona10,movie2);
	video.assignDirector(persona11,movie3);
	video.assignDirector(persona8,movie4);
	video.assignDirector(persona9,movie5);
	video.assignDirector(persona10,movie6);
	video.assignDirector(persona11,movie7);
	video.assignDirector(persona8,movie8);
	video.assignDirector(persona9,movie9);
	video.assignDirector(persona10,movie10);
	video.assignDirector(persona11,movie11);

	video.assignDirector(persona8,serie);
	video.assignDirector(persona9,serie1);
	video.assignDirector(persona10,serie2);
	video.assignDirector(persona11,serie3);
	video.assignDirector(persona8,serie4);
	video.assignDirector(persona9,serie5);
	video.assignDirector(persona10,serie6);
	video.assignDirector(persona11,serie7);
	video.assignDirector(persona8,serie8);
	video.assignDirector(persona9,serie9);
	video.assignDirector(persona10,serie10);
	video.assignDirector(persona11,serie11);


	//Asignamos la produccion a algun actor
	video.assignActor(persona,movie,"Principal",false);
	video.assignActor(persona1,movie1,"Principal",true);
	video.assignActor(persona2,movie2,"Secundario",true);
	video.assignActor(persona3,movie3,"Extra",false);
	video.assignActor(persona4,movie4,"Secundario",true);
	video.assignActor(persona5,movie5,"Principal",true);
	video.assignActor(persona6,movie6,"Secundario",false);
	video.assignActor(persona7,movie7,"Extra",true);
	video.assignActor(persona,movie8,"Principal",true);
	video.assignActor(persona1,movie9,"Principal",false);
	video.assignActor(persona2,movie10,"Secundario",true);
	video.assignActor(persona3,movie11,"Principal",true);

	video.assignActor(persona4,serie,"Principal",true);
	video.assignActor(persona5,serie1,"Secundario",true);
	video.assignActor(persona6,serie2,"Principal",false);
	video.assignActor(persona7,serie3,"Secundario",true);
	video.assignActor(persona,serie4,"Principal",true);
	video.assignActor(persona1,serie5,"Extra",false);
	video.assignActor(persona2,serie6,"Principal",true);
	video.assignActor(persona3,serie7,"Secundario",false);
	video.assignActor(persona4,serie8,"Principal",true);
	video.assignActor(persona5,serie9,"Principal",false);
	video.assignActor(persona6,serie10,"Secundario",true);
	video.assignActor(persona7,serie11,"Principal",false);
}

//Funcion que crea la zona de inicio de la pagina, mostrando las categorias de nuestro sistema
function showHomePage(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Categorías";
	
	//Recogemos el ID a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var video = VideoSystem.getInstance();

	//Recogemos en variables el iterador de categorias
	var categorias = video.categories;
	var categoria = categorias.next();

	//Mientras existan categorias...
	while(categoria.done !== true){
		//Creamos el contenido de cada tarjeta
		var div = document.createElement("div");
		div.setAttribute("class","col-lg-4 col-md-6 mb-4");

		var divNuevo = document.createElement("div");
		divNuevo.setAttribute("class","card h-100");

		var img = document.createElement("img");
		img.setAttribute("class","carr-img-top");
		img.setAttribute("src","img/Card_"+categoria.value.name+".jpg");
		img.setAttribute("alt",categoria.value.name);

		var div2 = document.createElement("div");
		div2.setAttribute("class","card-body");

		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("value",categoria.value.name);
		button.setAttribute("class","btn btn-link btn-lg btn-block");
		button.appendChild(document.createTextNode(categoria.value.name));
		button.addEventListener("click", showProductions);

		var p = document.createElement("p");
		p.setAttribute("class","card-text");
		p.appendChild(document.createTextNode(categoria.value.description));

		//Añadimos los elementos al contenido principal
		contenido.appendChild(div);
		div.appendChild(divNuevo);
		divNuevo.appendChild(img);
		divNuevo.appendChild(div2);
		div2.appendChild(button);
		div2.appendChild(p);

		//Llamamos al iterador para pasar a la siguiente categoria
		categoria = categorias.next();
	}
}

//Funcion que crea la estructura de menu, que permite navegar entre las categorias
function categoriesMenuPopulate(){
	//Recogemos el elemento a partir del cual empezaremos a pintar
	var menu = document.getElementById("menuvertical").getElementsByClassName("list-group")[0];

	var video = VideoSystem.getInstance();

	//Recogemos en variables el iterador de categorias
	var categorias = video.categories;
	var categoria = categorias.next();

	//Mientras existan categorias...
	while(categoria.done !== true){
		//Creamos las opciones del menu
		var opcion = document.createElement("button");
		opcion.setAttribute("class","list-group-item btn btn-link");
		opcion.setAttribute("value",categoria.value.name);
		opcion.appendChild(document.createTextNode(categoria.value.name));
		opcion.addEventListener("click",showProductions);

		//Añadimos los elementos al menu
		menu.appendChild(opcion);
		
		//Llamamos al iterador para pasar a la siguiente categoria
		categoria = categorias.next();
	}

	var opcion2 = document.createElement("button");
	opcion2.setAttribute("class","list-group-item btn btn-link");
	opcion2.setAttribute("id","cerrar");
	opcion2.setAttribute("value","CerrarRecurso");
	opcion2.appendChild(document.createTextNode("Cerrar Ventanas"));
	opcion2.addEventListener("click",cerrarVentanas);

	menu.appendChild(opcion2);
}

//Funcion que muestra un listado con los actores del sistema
function showActors(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Actores";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");
	var video = VideoSystem.getInstance();

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	//Recogemos en variables el iterador de actores
	var actores = video.actors;
	var actor = actores.next();

	//Mientras existan actores...
	while(actor.done !== true){
		//Creamos el contenido de cada tarjeta
		var div = document.createElement("div");
		div.setAttribute("class","col-lg-6 col-md-6 mb-4");

		var divNuevo = document.createElement("div");
		divNuevo.setAttribute("class","card h-100");

		var img = document.createElement("img");
		img.setAttribute("class","carr-img-top");
		img.setAttribute("src","img/"+actor.value.name+".jpg");
		img.setAttribute("alt",actor.value.name);

		var div2 = document.createElement("div");
		div2.setAttribute("class","card-body");

		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("value",actor.value.name + " " + actor.value.lastname1);
		button.setAttribute("class","btn btn-link btn-lg btn-block");
		button.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname1));
		button.addEventListener("click", showActor);

		//Añadimos los elementos al contenido principal
		contenido.appendChild(div);
		div.appendChild(divNuevo);
		divNuevo.appendChild(img);
		divNuevo.appendChild(div2);
		div2.appendChild(button);

		//Llamamos al iterador para pasar al siguiente actor
		actor = actores.next();
	}
}

//Funcion que muestra un listado con los directores del sistema
function showDirectors(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Directores";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");
	var video = VideoSystem.getInstance();

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	//Recogemos en variables el iterador de directores
	var directores = video.directors;
	var director = directores.next();

	//Mientras existan directores...
	while(director.done !== true){
		//Creamos el contenido de cada tarjeta
		var div = document.createElement("div");
		div.setAttribute("class","col-lg-6 col-md-6 mb-4");

		var divNuevo = document.createElement("div");
		divNuevo.setAttribute("class","card h-100");

		var img = document.createElement("img");
		img.setAttribute("class","carr-img-top");
		img.setAttribute("src","img/"+director.value.name+".jpg");
		img.setAttribute("alt",director.value.name);

		var div2 = document.createElement("div");
		div2.setAttribute("class","card-body");

		var button = document.createElement("button");
		button.setAttribute("type","button");
		button.setAttribute("value",director.value.name + " " + director.value.lastname1);
		button.setAttribute("class","btn btn-link btn-lg btn-block");
		button.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname1));
		button.addEventListener("click", showDirector);

		//Añadimos los elementos al contenido principal
		contenido.appendChild(div);
		div.appendChild(divNuevo);
		divNuevo.appendChild(img);
		divNuevo.appendChild(div2);
		div2.appendChild(button);

		//Llamamos al iterador para pasar al siguiente director
		director = directores.next();
	}
}

//Funcion que dado un actor muestra toda su información relacionada, incluida sus producciones.
function showActor(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = this.value;

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	//Declaramos una variable booleana a false
	var boolean = false;
	var video = VideoSystem.getInstance();
	
	//Recogemos en variables el iterador de actores
	var actores = video.actors;
	var actor = actores.next();

	//Mientras existan actores y boolean sea = false...
	while(actor.done !== true && !boolean){ 
		//Si el nombre y apellido del actor coinciden con en el del actor recogido...
		if(actor.value.name + " " + actor.value.lastname1  == this.value){
			//Creamos el contenido de cada tarjeta
			var div = document.createElement("div");
			div.setAttribute("class","col-lg-12 col-md-12 mb-4");
				
			var divImagen = document.createElement("div");
			divImagen.setAttribute("class","border d-flex justify-content-center");

			var divNuevo = document.createElement("div");
			divNuevo.setAttribute("class","");
		
			var img = document.createElement("img");
			img.setAttribute("class","carr-img-top");
			img.setAttribute("src","img/"+actor.value.name+"1.jpg");
			img.setAttribute("height","400");
			img.setAttribute("alt",actor.value.name);
		
			var div2 = document.createElement("div");
			div2.setAttribute("class","card-body");

			var nombre = document.createElement("p");
			nombre.setAttribute("class","card-text");
			nombre.appendChild(document.createTextNode("Nombre: " + actor.value.name));

			var apellido = document.createElement("p");
			apellido.setAttribute("class","card-text");
			apellido.appendChild(document.createTextNode("Apellido: " + actor.value.lastname1));

			var fechaNac = document.createElement("p");
			fechaNac.setAttribute("class","card-text");
			fechaNac.appendChild(document.createTextNode("Fecha de Nacimiento: " + actor.value.born.toLocaleDateString()));

			var imagen = document.createElement("p");
			imagen.setAttribute("class","card-text");
			imagen.appendChild(document.createTextNode("Imagen: " + actor.value.picture));

			var titulo = document.createElement("h3");
			titulo.appendChild(document.createTextNode("Producciones en las que ha trabajado:"));

			//Añadimos los elementos al contenido principal
			contenido.appendChild(div);
			div.appendChild(divImagen);
			divImagen.appendChild(divNuevo);
			divNuevo.appendChild(img);
			divImagen.appendChild(div2);
			div2.appendChild(nombre);
			div2.appendChild(apellido);
			div2.appendChild(fechaNac);
			div2.appendChild(imagen);
			div2.appendChild(titulo);

			//Recogemos en variables el iterador de producciones de cada actor
			var productions = video.getProductionsActor(actor.value);
			var production = productions.next();

			//Mientras existan producciones...
			while(production.done !== true){
				var button = document.createElement("button");
				button.setAttribute("type","button");
				button.setAttribute("value",production.value.title);
				button.setAttribute("class","btn btn-link btn-lg btn-block");
				button.appendChild(document.createTextNode(production.value.title));
				button.addEventListener("click", showProduction);

				div2.appendChild(button);

				//Llamamos al iterador para pasar a la siguiente produccion
				production = productions.next();
			}
			//Asignamos a boolean el valor de true
			boolean = true;
		}
		//Llamamos al iterador para pasar al siguiente actor
		actor = actores.next();
	}
}

//Funcion que dado un director, muestra toda su información relacionada, incluida sus producciones.
function showDirector(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = this.value;

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var boolean = false;
	var video = VideoSystem.getInstance();
	
	//Recogemos en variables el iterador de directores
	var directores = video.directors;
	var director = directores.next();

	//Mientras existan directores y boolean sea = false...
	while(director.done !== true && !boolean){ 
		//Si el nombre y apellido del director coinciden con en el del director recogido...
		if(director.value.name + " " + director.value.lastname1  == this.value){
			//Creamos el contenido de cada tarjeta
			var div = document.createElement("div");
			div.setAttribute("class","col-lg-12 col-md-12 mb-4");
				
			var divImagen = document.createElement("div");
			divImagen.setAttribute("class","border d-flex justify-content-center");

			var divNuevo = document.createElement("div");
			divNuevo.setAttribute("class","");
		
			var img = document.createElement("img");
			img.setAttribute("class","carr-img-top");
			img.setAttribute("src","img/"+director.value.name+"1.jpg");
			img.setAttribute("height","400");
			img.setAttribute("alt",director.value.name);
		
			var div2 = document.createElement("div");
			div2.setAttribute("class","card-body");

			var nombre = document.createElement("p");
			nombre.setAttribute("class","card-text");
			nombre.appendChild(document.createTextNode("Nombre: " + director.value.name));

			var apellido = document.createElement("p");
			apellido.setAttribute("class","card-text");
			apellido.appendChild(document.createTextNode("Apellido: " + director.value.lastname1));

			var fechaNac = document.createElement("p");
			fechaNac.setAttribute("class","card-text");
			fechaNac.appendChild(document.createTextNode("Fecha de Nacimiento: " + director.value.born.toLocaleDateString()));

			var imagen = document.createElement("p");
			imagen.setAttribute("class","card-text");
			imagen.appendChild(document.createTextNode("Imagen: " + director.value.picture));

			var titulo = document.createElement("h3");
			titulo.appendChild(document.createTextNode("Producciones en las que ha trabajado:"));

			//Añadimos los elementos al contenido principal
			contenido.appendChild(div);
			div.appendChild(divImagen);
			divImagen.appendChild(divNuevo);
			divNuevo.appendChild(img);
			divImagen.appendChild(div2);
			div2.appendChild(nombre);
			div2.appendChild(apellido);
			div2.appendChild(fechaNac);
			div2.appendChild(imagen);
			div2.appendChild(titulo);

			//Recogemos en variables el iterador de producciones de cada director
			var productions = video.getProductionsDirector(director.value);
			var production = productions.next();

			//Mientras existan producciones...
			while(production.done !== true){
				var button = document.createElement("button");
				button.setAttribute("type","button");
				button.setAttribute("value",production.value.title);
				button.setAttribute("class","btn btn-link btn-lg btn-block");
				button.appendChild(document.createTextNode(production.value.title));
				button.addEventListener("click", showProduction);

				div2.appendChild(button);

				//Llamamos al iterador para pasar a la siguiente produccion
				production = productions.next();
			}
			//Asignamos a boolean el valor de true
			boolean = true;
		}
		//Llamamos al iterador para pasar al siguiente director
		director = directores.next();
	}
}

//Funcion que dada una categoría, director o actor, muestra el listado de sus producciones.
function showProductions(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = this.value;

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var boolean = false;
	var video = VideoSystem.getInstance();

	//Recogemos en variables el iterador de categorias
	var categorias = video.categories;
	var categoria = categorias.next();

	//
	while(categoria.done !== true && !boolean){
		//Si el nombre de la categoria coincide con en el de la categoria recogida... 
		if(categoria.value.name == this.value){

			//Recogemos en variables el iterador de producciones de cada categoria
			var productions = video.getProductionsCategory(categoria.value);
			var production = productions.next();
	
			//Mientras existan producciones...
			while(production.done !== true){
				//Creamos el contenido de cada tarjeta
				var div = document.createElement("div");
				div.setAttribute("class","col-lg-12 col-md-12 mb-4");
				
				var divImagen = document.createElement("div");
				divImagen.setAttribute("class","border d-flex justify-content-center");

				var divNuevo = document.createElement("div");
				divNuevo.setAttribute("class","");
		
				var img = document.createElement("img");
				img.setAttribute("class","carr-img-top");
				img.setAttribute("src","img/"+production.value.title+".jpg");
				img.setAttribute("height","400");
				img.setAttribute("alt",production.value.title);
		
				var div2 = document.createElement("div");
				div2.setAttribute("class","card-body");
				
				var button = document.createElement("button");
				button.setAttribute("type","button");
				button.setAttribute("value",production.value.title);
				button.setAttribute("class","btn btn-link btn-lg btn-block");
				button.appendChild(document.createTextNode(production.value.title));
				button.addEventListener("click", showProduction);
	
				var p = document.createElement("p");
				p.setAttribute("class","card-text");
				p.appendChild(document.createTextNode(production.value.synopsis));

				//Añadimos los elementos al contenido principal
				contenido.appendChild(div);
				div.appendChild(divImagen);
				divImagen.appendChild(divNuevo);
				divNuevo.appendChild(img);
				divImagen.appendChild(div2);
				div2.appendChild(button);
				div2.appendChild(p);

				//Llamamos al iterador para pasar a la siguiente produccion
				production = productions.next();
			}
			//Asignamos a boolean el valor de true
			boolean = true;
		}
		//Llamamos al iterador para pasar a la siguiente categoria
		categoria = categorias.next();
	}
}

//Funcion que muestra la información de una producción, incluida su director y sus actores participantes.
function showProduction(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = this.value;

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var boolean = false;
	var video = VideoSystem.getInstance();

	//Recogemos en variables el iterador de producciones
	var producciones = video.productions;
	var produccion = producciones.next();

	//
	while(produccion.done !== true && !boolean){ 
		//Si el titulo de la produccion coincide con en el de la produccion recogida...
		if(produccion.value.title == this.value){
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

			var Nacionalidad = document.createElement("p");
			Nacionalidad.setAttribute("class","card-text");
			Nacionalidad.appendChild(document.createTextNode("Nacionalidad: " + produccion.value.nationality));

			var publicacion = document.createElement("p");
			publicacion.setAttribute("class","card-text");
			publicacion.appendChild(document.createTextNode("Fecha Publicación: " + produccion.value.publication));

			var synopsis = document.createElement("p");
			synopsis.setAttribute("class","card-text");
			synopsis.appendChild(document.createTextNode("Synopsis: " + produccion.value.synopsis));

			var image = document.createElement("p");
			image.setAttribute("class","card-text");
			image.appendChild(document.createTextNode("Imagen: " + produccion.value.image));

			var tituloA = document.createElement("h3");
			tituloA.appendChild(document.createTextNode("Actores:"));

			var tituloD = document.createElement("h3");
			tituloD.appendChild(document.createTextNode("Director:"));

			//Añadimos los elementos al contenido principal
			contenido.appendChild(div);
			div.appendChild(divImagen);
			divImagen.appendChild(divNuevo);
			divNuevo.appendChild(img);
			divImagen.appendChild(div2);
			div2.appendChild(button);
			div2.appendChild(titulo);
			div2.appendChild(Nacionalidad);
			div2.appendChild(publicacion);
			div2.appendChild(synopsis);	
			div2.appendChild(image);

			
		
			//Si la produccion es una instancia de Movie...añadimos esas dos propiedades
			if(produccion.value instanceof Movie){
				/*var recurso = document.createElement("p");
				recurso.setAttribute("class","card-text");
				recurso.appendChild(document.createTextNode("Recurso: " + produccion.value.resource));
				div2.appendChild(recurso);*/

				var localizacion = document.createElement("p");
				localizacion.setAttribute("class","card-text");
				localizacion.appendChild(document.createTextNode("Localización: " + produccion.value.locations));
				
				div2.appendChild(localizacion);

				//Añadimos el boton para ver los recursos en una nueva ventana

			}
			
			var button = document.createElement("button");
			button.setAttribute("type","button");
			button.setAttribute("value",produccion.value.title);
			button.setAttribute("class","btn btn-link btn-lg btn-block");
			button.appendChild(document.createTextNode("Ver Recurso"));
			button.addEventListener("click",abrirVentana);

			div2.appendChild(button);

			div2.appendChild(tituloA);
			
			//Recogemos en variables el iterador de actores de cada produccion
			var actores = video.getCast(produccion.value);
			var actor = actores.next();

			//Mientras existan actores...
			while(actor.done !== true){
				var button = document.createElement("button");
				button.setAttribute("type","button");
				button.setAttribute("value",actor.value.name + " " + actor.value.lastname1);
				button.setAttribute("class","btn btn-link btn-lg btn-block");
				button.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname1));
				button.addEventListener("click", showActor);

				var badge = document.createElement("h6");
				badge.setAttribute("id","papel");
				badge.appendChild(document.createTextNode("Papel: "));

				var span = document.createElement("span");
				span.setAttribute("class","badge badge-info");
				span.appendChild(document.createTextNode(actor.papel));

				//Añadimos los elementos al contenido principal
				div2.appendChild(button);
				div2.appendChild(badge);
				badge.appendChild(span);

				//Llamamos al iterador para pasar al siguiente actor
				actor = actores.next();
			}

			div2.appendChild(tituloD);
			
			var booleana = false;

			//Recogemos en variables el iterador de directores
			var directores = video.directors;
			var director = directores.next();

			while(director.done !== true && !booleana){
				//Recogemos en variables el iterador de producciones de cada director
				var productions = video.getProductionsDirector(director.value);
				var production = productions.next();

				////Mientras existan producciones...
				while(production.done !== true){
					//Si el titulo de la produccion coincide con en el de la produccion recogida...
					if(production.value.title === this.value){
						var button = document.createElement("button");
						button.setAttribute("type","button");
						button.setAttribute("value",director.value.name + " " + director.value.lastname1);
						button.setAttribute("class","btn btn-link btn-lg btn-block");
						button.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname1));
						button.addEventListener("click", showDirector);

						div2.appendChild(button);
						booleana = true;
					}
					//Llamamos al iterador para pasar a la siguiente produccion
					production = productions.next();;
				}
				//Llamamos al iterador para pasar al siguiente director
				director = directores.next();
			}

			boolean = true;
		}
		//Llamamos al iterador para pasar a la siguiente produccion
		produccion = producciones.next();
	}

}

//Funcion que muestra los recursos relacionados con una producción.
function showResource(){
	var tituloPrincipal = document.getElementById("tituloprincipal");
	tituloPrincipal.innerHTML = "Recursos";

	//Recogemos el elemento a partir del cual empezaremos a pintar
	var contenido = document.getElementById("tarjetasprincipal");

	//Mientras la variable contenido tenga hijos...
	while(contenido.firstChild){
		//Eliminamos siempre el primer hijo hasta que ya no tenga hijos
		contenido.removeChild(contenido.firstChild); 
	}

	var video = VideoSystem.getInstance();

	//Recogemos en variables el iterador de producciones
	var producciones = video.productions;
	var produccion = producciones.next();

	//Mientras existan producciones y la produccion sea una instancia de Movie
	while((produccion.done !== true) && (produccion.value instanceof Movie)){ 
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

		//Llamamos al iterador para pasar a la siguiente produccion
		produccion = producciones.next();
	}
}

//Creamos una unica funcion init para llamar a las funciones que la contienen
function init(){
	initPopulate();
	showHomePage();
	categoriesMenuPopulate();
}

window.onload = init;