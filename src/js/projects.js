

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
            'img/portfolio-mariona-mercadal-project-gall-detalle-petit.png',
            'img/portfolio-mariona-mercadal-project-gallo-detalle-petit-2.png',
            
        ],
        description: "<p>Diseño del cartel y el folleto para la conocida Fira Avícola "+
                        "Raça Prat.</p><p>Para destacar la importancia de la raza de gallos del Prat, "+
                        "se coge como elemento principal de comunicación la figura de gallo de patas "+
                        "azuales. Utilizando como colores principales y complementarios de todos "+
                        "los elementos el azul y el naranja.</p><p>El cartel va acompañado del folleto "+
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
        description: "<p>Rediseño de las tarjetas de transporte público de "+
                        "Barcelona teniendo como tema de partida la literatura"+
                        "clásica.</p><p>Dentro de esta temática, las tarjetas representan el "+
                        "elemento principal de tres libros mundialmente"+
                        "conocidos: Alicia en el país de las maravillas, Moby Dick "+
                        "y La Metamorfosis.</p><p>Por tal de dar unidad al conjunto, y para evitar "+
                        "problemas en la impresión en serie, los elementos "+
                        "ilustrados aparecen compuestos en una trama "+
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
        description: "<p>Diseño de un helado creativo no existente en el "+
                    "mercado actual. En este proyecto se desarrolla una línea de helados de "+
                    "carácter sexual, compuesto por un pene, una vagina y un pecho."+
                    "</p><p>Dirigido a un público adulto, que satisfaga no "+ 
                    "solo el placer de comerlo sino también de disfrutarlo solo o acompañado.</p>"+
                    "<p>El packaging también se creo añadiéndole un punto de "+
                    "erotismo y misterio al producto, revelando sutilmente a través del sabor "+
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
                    "Basandome en unas fotografías de la pareja, realice unos primeros "+
                    "esbozos a lápiz, para despues escanearlos y con ayuda de la tableta gráfica y "+
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
                    "Con el nuevo diseño se pretende vender el móvil de juguete como una crítica al uso abusivo en "+
                    "nuestra sociedad de los teléfonos móviles.</p><p>Para esto creo una identidad corporativa llamada “GLU”,"+ 
                    "basada en las burbujas del juguete. El pack se caracteriza por jugar con materiales reciclados como "+
                    "el cartón que contrasta con el material artificial del amarillo fluorescente.</p><p>El móvil va acompañado "+
                    "de un folleto que explica de manera cómica como utilizar este no-móvil.</p>",


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
        description: "<p>Guía turística ilustrada de Barcelona, que muestra lugares "+
                    "emblemáticos y no tan conocidos de una manera ilustrativa y fresca "+
                    "alejándose de las guías turísticas convencionales.</p><p>La guía pretende que el receptor interactúe con la guía, tanto con la edición "+
                    "escrita, como con la App donde puedes encontrar información ampliada y interactuar con otros "+
                    "usuarios des de tu smartphone.</p><p>La web supone un soporte de difusión de la guía escrita, a la vez que una pequeña "+
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
            'img/portfolio-mariona-mercadal-project-som-detalle2.png',
            'img/portfolio-mariona-mercadal-project-som-detalle-3.png',
            'img/portfolio-mariona-mercadal-project-som-detalle-4.png'
            
        ],
        description: "<p>Edición de una revista bilingüe (cat-eng) de carácter mensual, que "+
                        "pretende unir dos públicos, la sociedad menorquina y los miles de "+
                        "turistas que nos visitan a lo largo del verano.</p><p>La revista muestra tanto su historia y tradición, como la actualidad "+
                        "que pueden interesar tanto a las personas que residen allí todo el año, como "+
                        "aquellas que nos visitan y quieren tener una idea  más cercana de la isla.</p><p>La revista va soportado por una web para ayudar a su "+
                        "difusión y distribución y de una App para aquellos que sean subscriptores de la "+
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
        description: "<p>Ilustraciones realizadas para puntos de "+
                        "libro, temática del cual eran los viajeros, exploradores y aventureros "+
                        "de nuestra historia.</p><p>Las ilustraciones se hicieron primero en papel y lápiz, y "+
                        "después fueron escaneadas y vectorizadas con Adobe Illustrator.</p>",
        categories: [
            categories.ALL,
            categories.ILLUSTRATION
        ]
    },
    10: {
        id: 10,
        images: [
            'img/portfolio-mariona-mercadal-logo-elcove2.png',
            'img/portfolio-mariona-mercadal-flyer-elcove.png',
            'img/portfolio-mariona-mercadal-flyer-elcove2.png',
            'img/portfolio-mariona-mercadal-flyer-elcove3.png'
            
        ],
        description: "<p>Creación del logotipo del proyecto El Cove, "+
                        "pequeña iniciativa para vender verduras y frutas de Km O. "+
                        "Por tal de promocionar sus cestas de verduras se ha creado el folleto "+
                        "en el cual a través de ilustraciones se muestra lo que venden y su filosofía.</p>"+
                        "<p>Proyecto realizado en <a href=\"http://welovewebs.com\"> WeLoveWebs </a></p>",
        categories: [
            categories.ALL,
            categories.ILLUSTRATION,
            categories.EDITION,
            categories.GRAPHIC
        ]
    },

    11: {
        id: 11,
        images: [
            'img/portfolio-mariona-mercadal-landing-hairshopeuropa.png',
            'img/portfolio-mariona-mercadal-landing-hairshopeuropa2.png'
            
        ],
        description: "<p>Diseño de una landing web para una empresa de cuidados capilares.</p> "+
                        "<p>Esta landing representa un resumen de lo que podremos encontrar en la web principal, "+
                        "como el tipo de productos que se venden, lo más vendido, etc.</p> "+
                        "<p>En la estética se ha mantenido una concordancia con la web original por tal de que el usuario "+
                        "no se pierda, manteniendo los tonos azules y grises, pero buscando un aspecto más limpio y claro.</p>"+
                        "<p>Proyecto realizado en <a href=\"http://welovewebs.com\"> WeLoveWebs </a></p>",
        categories: [
            categories.ALL,
            categories.WEB
        ]
    },

    12: {
        id: 12,
        images: [
            'img/portfolio-mariona-mercadal-web-omled.png',
            'img/portfolio-mariona-mercadal-web-omled2.png',
            'img/portfolio-mariona-mercadal-web-omled3.png'
            
        ],
        description: "<p>Diseño de una web portafolio, y que a su vez tuviera acceso a otro site e-commerce. "+
                        "Los dos diseñados en la misma línea por tal de dar la sensación al usuario de continuar en la misma web.</p> "+
                        "<p>Se ha diseñado con menú vertical por tal de ofrecerle una mayor visibilidad a este, y con un masonry a su "+
                        "derecha destacando los apartados más importantes, el producto del mes o algún articulo destacado del blog.</p> "+
                        "<p>Proyecto realizado en <a href=\"http://welovewebs.com\"> WeLoveWebs </a></p>",
        categories: [
            categories.ALL,
            categories.WEB
        ]
    },

     13: {
        id: 13,
        images: [
            'img/portfolio-mariona-mercadal-web-impares2.png',
            'img/portfolio-mariona-mercadal-web-impares4.png',
            'img/portfolio-mariona-mercadal-web-impares5.png',
            'img/portfolio-mariona-mercadal-web-impares6.png'
            
        ],
        description: "<p>Negocio online que ofrece al usuario múltiples soluciones a sus problemas en una relacion amorosa.</p> "+
                        "<p>El logotipo representa la infidelidad, la ruptura, dibujando esos engranajes del amor no acaban de girar.</p> "+
                        "<p>La web fue creada des de 0 (diseño y programación) con metodologías ágiles. Es totalmente responsive, adaptándose a múltiples "+
                        "dispositivos, y cada paso de compra esta basado en la experiencia del usuario. Coautores del proyecto: Natalia Camacho y Jordi Cutillas. "+
                        "<p><a href=\"http://naxtrico.github.io/relaciones/dist/index.html\">Link a la web</a></p> ",
                      
        categories: [
            categories.ALL,
            categories.WEB,
            categories.GRAPHIC
        ]
    },

    14: {
        id: 14,
        images: [
            'img/portfolio-mariona-mercadal-landing-extensiones-naturales2.png',
            'img/portfolio-mariona-mercadal-landing-extensiones-naturales3.png'
           
            
        ],
        description: "<p>E-commerce de venta de extensiones naturales. Es tanto una web de presentación de la marca, "+
                        "como una tienda donde adquirir productos.</p> "+
                        "<p>Se hizo un rediseño de su anterior web que había quedado obsoleta tanto a nivel visual, "+
                        "como en experiencia de usuario, y se creo toda una estética (colores, tipos, maquetación...) "+
                        "en la cual el usuario pudiera ver las categorías de extensiones más fácilmente y navegar por "+
                        "ellas hasta encontrar el producto deseado en pocos clicks. </p> "+
                        "<p>Proyecto realizado en <a href=\"http://welovewebs.com\"> WeLoveWebs </a></p>",

                       
                      
        categories: [
            categories.ALL,
            categories.WEB
         
        ]
    },

    15: {
        id: 15,
        images: [
            'img/portfolio-mariona-mercadal-web-moving1.png',
            'img/portfolio-mariona-mercadal-web-moving2.png',
            'img/portfolio-mariona-mercadal-web-moving3.png'
           
            
        ],
        description: "<p>Web responsive para negocio de traslados en Barcelona.</p> "+
                        "<p>Como podemos ver en las imágenes el site se ha realizado "+
                        "con una estética ilustrativa para buscar la diferencia de otras webs ya "+
                        "existentes de traslados. </p> "+
                        "<p>La web ha sido creada pensando en el comportamiento de un usuario que quiera hacer "+
                        "un tipo de traslado en concreto (local, nacional, internacional, etc.), y "+
                        "dándole todas las facilidades con un formulario y un numero de contacto en cada página.</p> "+
                        "<p>Proyecto realizado en <a href=\"http://welovewebs.com\"> WeLoveWebs </a></p>",

                       
                      
        categories: [
            categories.ALL,
            categories.WEB
         
        ]
    },

    16: {
        id: 16,
        images: [
            'img/portfolio-mariona-mercadal-web-roques2.png',
            'img/portfolio-mariona-mercadal-web-roques.png',
            'img/portfolio-mariona-mercadal-web-roques3.png',
            'img/portfolio-mariona-mercadal-web-roques4.png'
           
            
        ],
        description: "<p>Empresa de geotécnica y construcción. He realizado un rediseño de su logotipo, "+
                        "manteniendo sus colores corporativos, pero dándole un aire más moderno en el cual "+
                        "se viera a primera vista que tipo de empresa son.</p> "+
                        "<p>La web esta totalmente adaptada a desktop, móvil y tablet. En ella se presentan "+
                        "sus servicios y sobretodo se da al usuario en todo momento la oportunidad de contactar "+
                        "con ellos para futuros proyectos. Se ha seguido una línea visual con los colores de la marca, "+
                        "con una estructura sencilla, pero clara para que el usuario no se pierda por el site.</p>",



                      
        categories: [
            categories.ALL,
            categories.GRAPHIC,
            categories.WEB
         
        ]
    },


};

