/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@welvisolutions.com
@organization:  Welvi Solutions
@since:         April 2016
-----------------------------------------------------------------------------*/

var categories = {
    ALL: 1,
    GRAPHIC: 2,
    ILLUSTRATION: 3,
    EDITION: 4,
    PACKAGING: 5,
    WEB: 6
};

var projects = {
    1: {
        id: 1,
        images: [
            'img/portfolio-mariona-mercadal-project-gallo-detalle-grande.png',
            'img/portfolio-mariona-mercadal-project-gallo-detalle-petit.png',
            'img/portfolio-mariona-mercadal-project-gallo-detalle-petit-2.png',
            
        ],
        description: "<p>Diseño del cartel y el folleto para la conocida Fira Avícola"+
                        "Raça Prat.</p><p>Para destacar la importancia de la raza de gallos del prat,"+
                        "se coge como elemento principal de comunicación la figura de gallo de patas"+
                        "azuales. Utilizando como colores principales y complementarios de todos"+
                        "los elementos el azul y el naranja.</p><p>El cartel va acompañado del folleto"+
                        "que sigue con la misma línea que el cartel.",
        categories: [
            categories.ALL,
            categories.GRAPHIC,
            categories.ILLUSTRATION
        ]
    },
    2: {
        id: 2,
        images: [
            'img/portfolio-mariona-mercadal-project-kabel-detalle-grande.png',
            'img/portfolio-mariona-mercadal-project-kabel-detalle-petit.png',
            'img/portfolio-mariona-mercadal-project-kabel-detalle-petit-2.png',
            'img/portfolio-mariona-mercadal-project-kabel-detalle-petit-3.png'
        ],
        description: "<p>Diseño de cartel, más tríptico y App, sobre una exposición "+
                    "de una tipografía y su autor.</p><p>La tipografía elegida fue la "+
                    "Kabel, del autor Rudolf Koch. El cartel intenta resaltar el "+
                    "aspecto tipográfico de la exposición, mientras el tríptico sirve como "+
                    "espécimen a la vez que hace de folleto informativo para "+
                    "los visitantes.</p><p>La App es un soporte para la exposición que sigue la linea "+
                    "gráfica del folleto y el cartel.</p>",
        categories: [
            categories.ALL,
            categories.GRAPHIC,
            categories.WEB
            
        ]
    },
    3: {
        id: 3,
        images: [
            'img/portfolio-mariona-mercadal-project-metro-detalle-gran.png',
            'img/portfolio-mariona-mercadal-project-metro-detalle-petit-2.png',
            'img/portfolio-mariona-mercadal-project-metro-detalle-petit-3.png',
            'img/portfolio-mariona-mercadal-project-metro-detalle-petit-4.png'
        ],
        description: "<p>Rediseño de las tarjetas de transporte público de"+
                        "Barcelona teniendo como tema de partida la literatura"+
                        "clásica.</p><p>Dentro de esta temática, las tarjetas representan el"+
                        "elemento principal de tres libros mundialmente"+
                        "conocidos: Alicia en el país de las maravillas, Moby Dick"+
                        "y La Metamorfosis.</p><p>Por tal de dar unidad al conjunto, y para evitar"+
                        "problemas en la impresión en serie, los elementos"+
                        "ilustrados aparecen compuestos en una trama"+
                        "que dan dinamismo a la tarjeta.</p>",
        categories: [
            categories.ALL,
            categories.GRAPHIC,
            categories.ILLUSTRATION
           
        ]
    },
    4: {
        id: 4,
        images: [
            'img/portfolio-mariona-mercadal-project-helado-detalle-grande.png',
            'img/portfolio-mariona-mercadal-project-helado-detalle-petit.png',
            'img/portfolio-mariona-mercadal-project-helado-detalle-petit-2.png',
            'img/portfolio-mariona-mercadal-project-helado-detalle-petit-3.png'
        ],
        description: "<p>Diseño de un helado creativo no existente en el"+
                    "mercado actual. En este proyecto se desarrolla una línea de helados de"+
                    "carácter sexual, compuesto por un pene, una vagina y un pecho."+
                    "</p><p>Dirigido a un público adulto, que satisfaga no"+ 
                    "solo el placer de comerlo sino también de disfrutarlo solo o acompañado.</p>"+
                    "<p>El packaging también se creo añadiéndole un punto de"+
                    "erotismo y misterio al producto, revelando sutilmente a través del sabor"+
                    "del helado lo que puede contener.</p>",
        categories: [
            categories.ALL,
            categories.GRAPHIC,
            categories.PACKAGING
            
        ]
    },
    5: {
        id: 5,
        images: [
            'img/portfolio-mariona-mercadal-project-ilustracion-detalle.png',
            'img/portfolio-mariona-mercadal-project-ilustracion-detalle-2.png'
            
        ],
        description: "<p>Ilustración vectorial para regalo de despedida de viaje.</p><p>"+
                    "Basandome en unas fotografías de la pareja, realice unos primeros"+
                    "esbozos a lápiz, para despues escanearlos y con ayuda de la tableta gráfica y"+
                    "el programa de Adobe Illustrator vectorizarlos.</p>",
        categories: [
            categories.ALL,
            categories.ILLUSTRATION
            
        ]
    },
    6: {
        id: 6,
        images: [
            'img/portfolio-mariona-mercadal-project-phone-detalle.png',
            'img/portfolio-mariona-mercadal-project-phone-detalle-2.png',
            'img/portfolio-mariona-mercadal-project-phone-detalle-3.png',
            'img/portfolio-mariona-mercadal-project-phone-detalle-4.png'
        ],
        description: "<p>Rediseño de un packaging comprado en e bazar chino con el objetivo de revalorizar su contenido."+
                    "Con el nuevo diseño se pretende vender el móvil de juguete como una crítica al uso abusivo en"+
                    "nuestra sociedad de los teléfonos móviles.</p><p>Para esto creo una identidad corporativa llamada “GLU”,"+ 
                    "basada en las burbujas del juguete. El pack se caracteriza por jugar con materiales reciclados como"+
                    "el cartón que contrasta con el material artificial del amarillo fluorescente.</p><p>El móbil va acompañado"+
                    "de un folleto que explica de manera cómica como utilizar este no-móbil.</p>",


        categories: [
            categories.ALL,
            categories.GRAPHIC,
            categories.PACKAGING
            
        ]
    },
    7: {
        id: 7,
        images: [
            'img/portfolio-mariona-mercadal-project-guia-detalle.png',
            'img/portfolio-mariona-mercadal-project-guia-detalle-2.png',
            'img/portfolio-mariona-mercadal-project-guia-detalle-3.png',
            'img/portfolio-mariona-mercadal-project-guia-detalle-4.png'
        ],
        description: "<p>Guía turística ilustrada de Barcelona, que muestra lugares"+
                    "emblemáticos y no tan conocidos de una manera ilustrativa y fresca"+
                    "alejándose de las guías turísticas convencionales.</p><p>La guía pretende que el receptor interactúe con la guía, tanto con la edición"+
                    "escrita, como con la App donde puedes encontrar información ampliada y interactuar con otros"+
                    "usuarios des de tu smartphone.</p><p>La web supone un soporte de difusión de la guía escrita, a la vez que una pequeña"+
                    "plataforma donde encontrar algo de información de cada ciudad.</p>",
        categories: [
            categories.ALL,
            categories.EDITION,
            categories.GRAPHIC,
            categories.ILLUSTRATION,
            categories.WEB
        ]
    },
    8: {
        id: 8,
        images: [
            'img/portfolio-mariona-mercadal-project-som-detalle.png',
            'img/portfolio-mariona-mercadal-project-som-detalle-2.png',
            'img/portfolio-mariona-mercadal-project-som-detalle-3.png',
            'img/portfolio-mariona-mercadal-project-som-detalle-4.png'
            
        ],
        description: "<p>Edición de una revista bilingüe (cat-eng) de carácter mensual, que"+
                        "pretende unir dos públicos, la sociedad menorquina y los miles de"+
                        "turistas que nos visitan a lo largo del verano.</p><p>La revista muestra tanto su historia y tradición, como la actualidad"+
                        "que pueden interesar tanto a las personas que residen allí todo el año, como"+
                        "aquellas que nos visitan y quieren tener una idea  más cercana de la isla.</p><p>La revista va soportado por una web para ayudar a su"+
                        "difusión y distribución y de una App para aquellos que sean subscriptores de la"+
                        "revista.</p>",
        categories: [
            categories.ALL,
            categories.EDITION,
            categories.GRAPHIC,
            categories.WEB
        ]
    },
    9: {
        id: 9,
        images: [
            'img/portfolio-mariona-mercadal-project-libro-detalle.png',
            'img/portfolio-mariona-mercadal-project-libro-detalle-2.png',
            'img/portfolio-mariona-mercadal-project-libro-detalle-3.png',
            'img/portfolio-mariona-mercadal-project-libro-detalle-4.png'
            
        ],
        description: "<p>Ilustraciones realizadas para puntos de"+
                        "libro, temática del cual eran los viajeros, exploradores y aventureros"+
                        "de nuestra historia.</p><p>Las ilustraciones se hicieron primero en papel y lápiz, y "+
                        "después fueron escaneadas y vectorizadas con Adobe Illustrator.</p>",
        categories: [
            categories.ALL,
            categories.ILLUSTRATION
        ]
    },
};
