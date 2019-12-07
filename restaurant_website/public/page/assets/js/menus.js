//script for slideshow - Begin
var slider = document.getElementsByClassName("slide-show");
var images = [
  "assets/images/experience/slideshow/room.jpg"
];

//create slide elements add add them to the page, into slider container
function addSlides() {
    var slideElement = document.createElement("DIV");
    var slideElement2 = document.createElement("DIV");

    slideElement.classList.add("slide");
    slideElement2.classList.add("slideImgPlaceHolder");

    slider[0].appendChild(slideElement);
    slider[0].getElementsByClassName("slide")[0].appendChild(slideElement2);
    //add images from Array
    slider[0].getElementsByClassName("slideImgPlaceHolder")[0].style.backgroundImage = "url(" + images[0] + ")";
}
addSlides();

//first slide:
//make first slide and his dot visible when page is loaded
document.getElementsByClassName("slide")[0].style.opacity = "1";
setTimeout(function() {
  document.getElementsByClassName("slideImgPlaceHolder")[0].style.animationPlayState = "running";
  document.getElementsByClassName("slideImgPlaceHolder")[0].style.animation ="zoom 100s infinite";
}, 1500)


//make page scroll down when arrow icon is clicked
//works only with:
//<script
// src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>

var arrowContainer = document.getElementsByClassName('arrow-container')

  const scroll = new SmoothScroll('.slide-show a[href*="#"]', {
	speed: 1500
});

//script for slideshow - End


//script for menu list - Begin
//<MENU OBJECT
var menuLists = [
    {scottsdale:
      [
        {
          starters:{
           mainTitle:'STARTERS',
           mainContent:'',
           subtitle:[
             'POZOLE VERDE',
             'GUACAMOLE',
             'EMPANADAS OAXACA',
             'CALAMARI FRITO',
             'TAQUITOS AL GUSTO',
             'QUESO FUNDIDO',
             'TOSTADITAS'
           ],
           content:[
             'tomatillo-based broth, white hominy, organic free-range cilantro chicken, cabbage',
             'organic avocado, pomegranate seeds, lime pepitas, red onion, jalapeño, cilantro w/ warm plantain chips',
             'organic free-range chicken, onion, jalapeño cabbage, queso fresco, pickled onion, chipotle crema',
             'chipotle-seasoned wild-caught calamari, spicy jalapeño-cilantro, citrus avocado sauce',
             'organic free-range chicken mixiote, jalapeño cabbage, queso fresco, pickled onion, vegan habanero crema',
             'organic cheese from chihuahua mexico, roasted pasilla chile, mushroom, onion, soyrizo served w/ handmade flour tortillas',
             '5 house-made crispy corn tortillas, black beans, queso fresco, butter lettuce organic shredded chicken mixiote organic grass-fed beef barbacoa'
           ]
         }
         },
         {
         rawBar:{
          mainTitle:'RAW BAR',
          mainContent:'',
          subtitle:[
            'VEGAN CEVICHE (VG)',
            'CEVICHE TRIO',
            'CEVICHE BLANCO',
            'HABANERO OYSTER SHOTS',
            'SASHIMI MEXICANO',
            'TUNA SASHIMI',
            'PRAWNS',
            'ALASKAN CRAB LEGS',
            'OYSTERS ON THE HALF SHELL'
          ],
          content:[
            'hearts of palm, lime, serrano, baby heirloom tomatoes, shaved coconut, mango',
            'diced u10 jumbo shrimp, wild-caught alaskan salmon, wild-caught ahi tuna, citrus marinade, mango',
            'wild-caught chilean sea bass, lime, jalapeño, roma tomato, cilantro, red onion, avocado',
            'three fresh oysters, chipotle sauce, shallot-cilantro lime sauce, finished w/ roasted habanero salt',
            'wild-caught ahi tuna, sliced cucumber, radish, avocado, pomegranate seeds, leche de tigre, chile de arbol',
            'wild-caught tuna, japanese cucumber, red onion, garlic clove, toasted sesame, himalayan salt, lemon soy chile de arbol',
            '24-hour marinated w/ ancho & guajillo chili, garlic, lime, rock salt',
            'dressed w/ shiso & coriander leaf chimichurri, paired w/ house-made tomatillo cocktail sauce & charred lemon',
            'lime caviar, fresno pepper, tomatillo cocktail sauce'
          ]
        }
        },
        {
        omakase:{
          mainTitle:'OMAKASE',
          mainContent:'our journey through mexico. let our culinary team curate a custom experience through the regions that inspire our cuisine.',
          subtitle:[
            'BAJA',
            'JALISCO',
            'OAXACA'
          ],
          content:[
          ]
        }
        },
        {
        taqueria:{
          mainTitle:'TAQUERIA',
          mainContent:'2 per order, served in house-made blue corn tortillas (butter lettuce wraps by request)',
          subtitle:[
            'KOBE AL PASTOR',
            'CHICKEN MIXIOTE',
            'SEA BASS ENSENADA',
            'TIGER SHRIMP',
            'CARNE ASADA',
            'CILANTRO CHICKEN',
            'STREET TACO BOX'
          ],
          content:[
            'japanese kobe beef marinated w/ dried chilis, spices & pineapple, slow-cooked on a vertical rotisserie & topped w/ fresh pineapple, grilled onions, chile toreado',
            'slow-baked organic free-range chicken breast in mixiote sauce, grilled pineapple habanero salsa & pickled onion',
            'crispy beer-battered wild-caught chilean sea bass, cucumber, radish slaw, vegan habanero crema',
            'sautéed u10 jumbo shrimp marinated w/ garlic, lime & white wine, jalapeño cabbage, avocado mojo & cilantro',
            'organic grass-fed prime skirt steak, cilantro jalapeño marinade, sweet pepper, smoked guajillo sauce & cotija cheese',
            'organic free-range jidori chicken, roasted onion, jalapeño, cilantro, lime, tomatillo avocado salsa & queso',
            '5 handmade blue corn tortillas w/ black beans, salsa, lime, cilantro onion'
          ]
        }
       },
       {
        rocks:{
          mainTitle:'ROCKS',
          mainContent:'our signature entrées served over hot lava stones w/ sweet chipotle, onion, poblano pepper served w/ pico de gallo, tortillas, rice & beans',
          subtitle:[
            'ORGANIC FREE-RANGE CHICKEN',
            'TIGER SHRIMP',
            'ORGANIC GRASS-FED CARNE ASADA',
          ],
          content:[
            'jidori chicken',
            'u10 jumbo shrimp',
            'prime skirt steak',
          ]
        }
        },
        {
        salads:{
          mainTitle:'SALADS',
          mainContent:'add protein to any salad - choose from: organic free-range chicken organic grass-fed carne asada wild-caught grilled shrimp',
          subtitle:[
            'TOCA CAESAR',
            'MEXICAN FATTOUSH',
            'CAPRESE MEXICANA',
          ],
          content:[
            'organic red leaf romaine lettuce, pepita seeds, garlic herb bread crumble, truffle manchego cheese, house-made dressing',
            'organic hearts of romaine lettuce, cherry tomato, radish, tajin blue corn tortillas, queso fresco, red onion, cilantro, micro tangerine, roasted ancho & cortez sea salt vinaigrette',
            'trio of fresh garlic-rubbed grilled heirloom tomatoes, grilled panela cheese, almonds, black winter truffle oil',
          ]
        }
        }
      ]
    },
    {losAngelesDM:
      [
       {
        starters:{
         mainTitle:'PLATOS PEQUEÑOS',
         mainContent:'',
         subtitle:[
           'POZOLE VERDE',
           'TOSTADAS',
           'GUACAMOLE',
           'TAQUITOS AL GUSTO',
           'CALAMARI FRITO',
           'QUESO FUNDIDO',
           'STREET TACO BOX'
         ],
         content:[
           'tomatillo based, white hominy, cilantro chicken, cabbage',
           'crispy corn tortillas, black beans, corn relish, queso fresco, butter',
           'organic avocado, pomegranate seeds, lime pepitas, red onion, jalapeño',
           'organic free-range chicken, onion, jalapeño cabbage, queso fresco, pickled onion, chipotle crema',
           'shredded chicken, jalapeño cabbage, queso fresco, roasted tomatillo',
           'chipotle-seasoned calamari, spicy jalapeño-cilantro w/ citrus avocado sauce',
           'roasted pasilla chile, mushroom, onion, soyrizo w/ handmade flour'
         ]
       }
     },
     {
       rawBar:{
        mainTitle:'RAW BAR',
        mainContent:'served with choice of house-made plantain chips or warm corn tortilla chips',
        subtitle:[
          'CEVICHE BLANCO',
          'SASHIMI MEXICANO',
          'VEGAN CEVICHE',
          'CEVICHE TRIO'
        ],
        content:[
          'chilean sea bass, lime, jalapeño, roma tomato, cilantro, red onion, avocado',
          'ahi tuna, sliced cucumber, radish, avocado, pomegranate seeds, leche de tigre, chile de arbol',
          'hearts of palm, lime, serrano, baby heirloom tomatoes, shaved coconut, mango',
          'diced jumbo shrimp, alaskan salmon, ahi tuna, citrus marinade, mango'
        ]
      }
      },
      {
      salads:{
        mainTitle:'SALADS',
        mainContent:'',
        subtitle:[
          'TOCA CAESAR',
          'MEXICAN FATTOUSH',
          'CAPRESE MEXICANA',
          'ENSALADA DE SANDIA'
        ],
        content:[
          'red leaf lettuce, pepita seeds, garlic herb bread crumble, truffle manchego cheese',
          'organic romaine heart lettuce, cherry tomato, radish, blue corn tortillas, queso fresco, cilantro, micro tangerine, roasted ancho & cortez sea salt vinaigrette',
          'trio of fresh garlic-rubbed grilled heirloom tomato, grilled panela cheese, almond, black winter truffle oil',
          'grilled watermelon marinated w/ tajin pepper, lime, micro arugula, sweet mexican peppers, morita chile dressing'
        ]
      }
      },
      {
      dulces:{
        mainTitle:'DULCES',
        mainContent:'',
        subtitle:[
          'CHURRO ICE CREAM SANDWICH',
          'STRAWBERRY TRES LECHES',
          'TARTA DE QUESO',
          'MOUSSE DE CHOCOLATE BLANCO',
          'TARTA DE LIMA',
          'TACOS DE MANZANA',
          'OAXACAN CHOCOLATE MERINGUE'
        ],
        content:[
          'warm cinnamon & sugar churro, salted caramel ice cream',
          'sweet vanilla tres leches, strawberry whipped cream, strawberries',
          'peanut butter cream cheese, chocolate, oreo crust, palomitas de caramelo, vanilla bean ice cream',
          'rice crisp, cocoa powder, chocolate shavings, berry sauce',
          'cinnamon graham cracker, yuzu lime, lime zest, toasted meringue',
          'tequila infused apple, star anise, ginger, marscapone cream, cinnamon, ancho caramel sauce',
          'oaxacan cocoa chocolate, baked meringue, chocolate shavings'
        ]
      }
      },
      {
      rocks:{
        mainTitle:'ROCKS',
        mainContent:'our signature entrées served over hot lava stones w/ sweet chipotle, onion, poblano pepper served w/ pico de gallo, tortillas, rice & beans',
        subtitle:[
          'ORGANIC FREE-RANGE CHICKEN',
          'TIGER SHRIMP',
          'ORGANIC GRASS-FED CARNE ASADA',
        ],
        content:[
          'jidori chicken',
          'u10 jumbo shrimp',
          'prime skirt steak',
        ]
      }
      }
    ]
  },
    {veganDM:
      [
       {
        platosPequenos:{
         mainTitle:'PLATOS PEQUEÑOS',
         mainContent:'',
         subtitle:[
           'TOSTADITAS',
           'POZOLE VERDE',
           'EMPANADAS OAXACA',
           'GUACAMOLE',
           'VEGAN CEVICHE',
           'COCONUT SASHIMI MEXICANO',
           'QUESO FUNDIDO'
         ],
         content:[
           'chipotle-dusted tofu, black beans, vegan parmesan, butter lettuce on house-made crispy corn tortillas',
           'tomatillo-based broth, white hominy, cabbage',
           'soyrizo, jalepeño cabbage, pickled onion, vegan habanero crema',
           'organic avocado, pomegranate seeds, lime pepitas, red onion, jalapeño, cilantro, served w/ warm house-made plantain chip',
           'hearts of palm, lime, serrano, baby heirloom tomatoes, shaved coconut, mango',
           'coconut, sliced cucumber, radish, avocado, pomegranate seeds, leche de tigre, chile de arbol',
           'roasted pasilla chile, vegan queso fondue, mushroom, onion, soyrizo served w/ house-made flour tortillas'
         ]
       }
       },
       {
       rocks:{
        mainTitle:'ROCKS',
        mainContent:'our signature entrées served over hot lava stones w/ sweet-chipotle, onion, poblano pepper served w/ pico de gallo, tortillas, rice & beans',
        subtitle:[
          'TOFU',
          'POLLO VEGANO',
          'MUSHROOM'
        ],
        content:[
          'chipotle-dusted tofu',
          'vegan chicken',
          'mushroom steak'
        ]
      }
      },
      {
      salads:{
        mainTitle:'SALADS',
        mainContent:'add protein to any salad - choose from: organic free-range chicken organic grass-fed carne asada wild-caught grilled shrimp',
        subtitle:[
          'TOCA CAESAR',
          'MEXICAN FATTOUSH',
          'TOCA SALAD',
        ],
        content:[
          'organic red leaf romaine, pepita seeds, garlic herb bread crumble, vegan parmesan, house-made dressing',
          'organic hearts of romaine, cherry tomato, radish, tajin blue corn tortilla, vegan parmesan, red onion, cilantro, micro tangerine, roasted ancho & cortez sea salt vinaigrette',
          'organic red kale, haricot verts, hearts of palm, baby heirloom tomatoes, red onion, toasted pine nuts, chia seeds, quinoa, dried plum, spicy dijon vinaigrette',
        ]
      }
      }
    ]
  },
    {dinnerCocktails:
      [
        {
        cocktailsDeAgave:{
         mainTitle:'CÓCTELES DE AGAVE',
         mainContent:'',
         subtitle:[
           'TOCA MARGARITA',
           'AMANTE PICANTE',
           'ML SERRANA',
           'LOS MUERTOS',
           'ALMA DE SOL',
           'COMO LA FLOR',
           'WINNIE DE POOH',
           'TRANQUILO',
           'EAST LOS',
           'MONO SEE MONO DO',
           'LA MORADA',
           'PAPASITO',
           'CAZAFORTUNAS'
         ],
         content:[
           'altos plata, fresh lime, agave, lava salt oaxacan style w/ el silencio espadin & sal de gusano',
           'avion silver, lime juice, agave serrano, cilantro, tajin',
           'azuñia reposado, serrano pepper, agave, lime juice, cucumber',
           'el tesoro anejo, blood orange, lime juice, hibiscus, activated charcoal agave',
           'avion reposado, tumeric chili st. germain, lemon, passion fruit, zucca amaro, red wine float',
           'codigo rosa, guava, lillet, lemon juice, rose water',
           'casamigos blanco infused with chamomile, green chartreuse, ginger, lemon, mint, wild flower honey',
           'ilegal mezcal, matcha agave, yuzu, acho reyes verde, grapefruit',
           'ilegal mezcal, house made citrus mix, guajillo-mango shrub, aperol',
           'monkey 47 gin, bahnez mezcal, lime juice, homemade blackberry, strawberry & cilantro gomme',
           'yola mezcal, dolin blanc, cyrano armagnac, yellow chartreuse, butterfly flower',
           'el silencio espadin, pineapple gomme, campari, montenegro, amaro, collectively barrel aged',
           'don julio 1942, habanero infused el silencio joven, mango, agave, lime, tajin'
         ]
       }
     }
    ]
   },
    {dulces:
      [
        {
        dulces:{
         mainTitle:'',
         mainContent:'',
         subtitle:[
           'CONCHA SOUFFLE',
           'OAXACAN CHOCOLATE CAKE',
           'STRAWBERRY TRES LECHES',
           'ASSORTED SORBETS',
           'CHURRO ICE CREAM SANDWICH',
           'CRUJIENTE DE MANZANA',
           'FRESCO REQUESÓN',
           'TARTA DE LIMA'
         ],
         content:[
           'white chocolate, mexican sweet bread, raspberry compote, butter sugar crust',
           'coconut chocolate frosting, blackberry & blueberry sauce',
           'sweet vanilla tres leches, strawberry whipped cream, strawberries',
           'w/ mixed berry sauce',
           'warm cinnamon & sugar churro, salted caramel ice cream',
           'cinnamon apple, crunchy strussle, cajeta sauce, vanilla ice cream',
           'banana lead, cream cheese, berry sauce, maria cookie crust',
           'cinnamon graham cracker, yuzu lime, toasted meringue'
         ]
       }
       }
    ]
  },
    {happyHour:
      [
        {
        forTheTable:{
          mainTitle:'FOR THE TABLE',
          mainContent:'',
          subtitle:[
            'QUESO FUNDIDO',
            'CALAMARI FRITO',
            'TOCA CAESAR',
            'MANCHEGO TRUFFLE FRIES'
          ],
          content:[
            'roasted pasilla chile, mushroom, onion, soyrizo w/ handmade flour tortillas',
            'chipotle seasoned calamari, spicy cilantro, jalapeño, citrus sauce',
            'red leaf lettuce, pepita seeds, garlic herb bread crumble, truffle manchego cheese',
            'curly fries, mexican spices, diablo crema'
          ]
        }
      },
       {
        vinos: {
          mainTitle:'VINOS',
          mainContent:'',
          subtitle:[
            'TENUTA POLVARO - PINOT GRIGIO',
            'OUTLOT - CABARNET SAUVIGNON',
            'CURRAN GRENACHE GRIS - ROSÉ',
            'BAILY LAPIERRE BRUT - ROSÉ'
          ],
          content:[
            'soft, green apple, citrus',
            'fig, pepper rose, savory spice',
            'balanced acidity, strawberry, watermelon',
            'light red berry, mineral freshness'
          ]
         }
        }
        ]
    },
    {losAngelesBrunch:
      [
        {
        starters:{
         mainTitle:'PLATOS PEQUEÑOS',
         mainContent:'',
         subtitle:[
           'POZOLE VERDE',
           'TOSTADAS',
           'GUACAMOLE',
           'TAQUITOS AL GUSTO',
           'CALAMARI FRITO',
           'QUESO FUNDIDO',
           'STREET TACO BOX'
         ],
         content:[
           'tomatillo based, white hominy, cilantro chicken, cabbage',
           'crispy corn tortillas, black beans, corn relish, queso fresco, butter',
           'organic avocado, pomegranate seeds, lime pepitas, red onion, jalapeño',
           'organic free-range chicken, onion, jalapeño cabbage, queso fresco, pickled onion, chipotle crema',
           'shredded chicken, jalapeño cabbage, queso fresco, roasted tomatillo',
           'chipotle-seasoned calamari, spicy jalapeño-cilantro w/ citrus avocado sauce',
           'roasted pasilla chile, mushroom, onion, soyrizo w/ handmade flour'
         ]
       }
       },
       {
       rawBar:{
        mainTitle:'RAW BAR',
        mainContent:'served with choice of house-made plantain chips or warm corn tortilla chips',
        subtitle:[
          'CEVICHE BLANCO',
          'SASHIMI MEXICANO',
          'VEGAN CEVICHE',
          'CEVICHE TRIO'
        ],
        content:[
          'chilean sea bass, lime, jalapeño, roma tomato, cilantro, red onion, avocado',
          'ahi tuna, sliced cucumber, radish, avocado, pomegranate seeds, leche de tigre, chile de arbol',
          'hearts of palm, lime, serrano, baby heirloom tomatoes, shaved coconut, mango',
          'diced jumbo shrimp, alaskan salmon, ahi tuna, citrus marinade, mango'
        ]
      }
      },
      {
      salads:{
        mainTitle:'SALADS',
        mainContent:'',
        subtitle:[
          'TOCA CAESAR',
          'MEXICAN FATTOUSH',
          'CAPRESE MEXICANA',
          'ENSALADA DE SANDIA'
        ],
        content:[
          'red leaf lettuce, pepita seeds, garlic herb bread crumble, truffle manchego cheese',
          'organic romaine heart lettuce, cherry tomato, radish, blue corn tortillas, queso fresco, cilantro, micro tangerine, roasted ancho & cortez sea salt vinaigrette',
          'trio of fresh garlic-rubbed grilled heirloom tomato, grilled panela cheese, almond, black winter truffle oil',
          'grilled watermelon marinated w/ tajin pepper, lime, micro arugula, sweet mexican peppers, morita chile dressing'
        ]
      }
      },
      {
      dulces:{
        mainTitle:'DULCES',
        mainContent:'',
        subtitle:[
          'CHURRO ICE CREAM SANDWICH',
          'STRAWBERRY TRES LECHES',
          'TARTA DE QUESO',
          'MOUSSE DE CHOCOLATE BLANCO',
          'TARTA DE LIMA',
          'TACOS DE MANZANA',
          'OAXACAN CHOCOLATE MERINGUE'
        ],
        content:[
          'warm cinnamon & sugar churro, salted caramel ice cream',
          'sweet vanilla tres leches, strawberry whipped cream, strawberries',
          'peanut butter cream cheese, chocolate, oreo crust, palomitas de caramelo, vanilla bean ice cream',
          'rice crisp, cocoa powder, chocolate shavings, berry sauce',
          'cinnamon graham cracker, yuzu lime, lime zest, toasted meringue',
          'tequila infused apple, star anise, ginger, marscapone cream, cinnamon, ancho caramel sauce',
          'oaxacan cocoa chocolate, baked meringue, chocolate shavings'
        ]
      }
      },
      {
      rocks:{
        mainTitle:'ROCKS',
        mainContent:'our signature entrées served over hot lava stones w/ sweet chipotle, onion, poblano pepper served w/ pico de gallo, tortillas, rice & beans',
        subtitle:[
          'ORGANIC FREE-RANGE CHICKEN',
          'TIGER SHRIMP',
          'ORGANIC GRASS-FED CARNE ASADA',
        ],
        content:[
          'jidori chicken',
          'u10 jumbo shrimp',
          'prime skirt steak',
        ]
      }
      },
      {
      salads:{
        mainTitle:'SALADS',
        mainContent:'add protein to any salad - choose from: organic free-range chicken organic grass-fed carne asada wild-caught grilled shrimp',
        subtitle:[
          'TOCA CAESAR',
          'MEXICAN FATTOUSH',
          'CAPRESE MEXICANA',
        ],
        content:[
          'organic red leaf romaine lettuce, pepita seeds, garlic herb bread crumble, truffle manchego cheese, house-made dressing',
          'organic hearts of romaine lettuce, cherry tomato, radish, tajin blue corn tortillas, queso fresco, red onion, cilantro, micro tangerine, roasted ancho & cortez sea salt vinaigrette',
          'trio of fresh garlic-rubbed grilled heirloom tomatoes, grilled panela cheese, almonds, black winter truffle oil',
        ]
      }
    }
    ]
  },
    {LaDinnerCocktails:
    [
      {
      cockteles:{
       mainTitle:'CÓCTELES',
       mainContent:'',
       subtitle:[
         'BUT FIRST, COFFEE',
         'A LA VIDA',
         'LA BARRIO',
         'BAJA ROSA',
         'EL PALETERO',
         'ROSÉ ALL DAY'
       ],
       content:[
         'tromba reposado, mr. black coffee liqueur, homemade coca-cola syrup, espresso',
         'espolon reposado, carrot juice, fresh ginger, lemon, wildflower honey',
         'roca patron silver, watermelon, mango, lime, mango guajillo',
         'avion silver, sage, lime, prickly pear, chareau aloe liqueur',
         'gray whale gin, lemon, mint, pineapple, orange',
         'codigo rosa, ketel grapefruit rose, basil, lemon, grapefruit, rosé, sea salt'
       ]
     }
     },
     {
     margaritas:{
       mainTitle:'MARGARITAS',
       mainContent:'',
       subtitle:[
         'GUAVA',
         'PASSION FRUIT',
         'HIBISCUS',
         'PRICKLY PEAR MARGARITA',
         'THAI BASIL MARGARITA'
       ],
       content:[
       'altos plata, combier, guava purée, thyme, lime',
       'avion reposado, passion fruit purée, thyme, agave',
       'azunia blanco, cucumber, hibiscus, basil, lime',
       'avion silver, lime, agave, prickly pear',
       'azunia blanco, thai basil, lime, agave'
     ]
    }
    }
  ]
 }
]
//MENU OBJECT/>

//when user click on menu name, display list of items for that menu
//get all elements with menu name:
var menu = document.getElementsByClassName('menu')
var k = document.getElementsByClassName('row')[0]
var menus = []

//push all tags with class 'menu' to array. From menus array, his indexes will be usefull to manipulate with items down in this scrit
    for(let i=0; i < menu.length; i++) {
      menus.push(menu[i])
    }

var index;
var menuDiv = document.getElementsByClassName('menu-div')
var menuInfoDiv = document.getElementById('menu-info')

//when user choose some of menu tabs, show additional information about it
  for(let i=0; i < menu.length; i++) {
    menu[i].onclick = function(event) {
        event.stopPropagation()
        //nodesDiv and nodesDiv2 will hold data
        var nodesDiv = document.createElement('DIV')
        var nodesDiv2 = document.createElement('DIV')

        index = menus.indexOf(this)

        //data for tab happyHour, easier way is to use this function instead in menuLists array(object)
         function showHappyHour(){
           var happyHour = [
             {
               laHappyHour:['Mezcal Mondays Menu | 5pm - 12am', 'Tuesday | 5pm - 8pm', 'Wednesday – Friday | 5pm - 7pm']
             },
             {
               laWeekendHappyHour:['Saturday – Sunday | 3pm - 6pm']
             },
             {
               sctHappyHour:['Tuesday – Saturday | 4pm - 6pm']
             }
           ]
           var happyHourHeadings = ['Los Angeles Happy Hour','Los Angeles Weekend Happy Hour','Scottsdale Happy Hour']
           var happyHourProps = []
           var hhPropsItems = []
           var div;
           var head;

           //push properties
            for(var i=0; i < happyHour.length; i++) {
              happyHourProps.push(Object.keys(happyHour[i]))
            }
            //push property's array values
            for(let i=0; i < happyHourProps.length; i++) {
              hhPropsItems.push(happyHour[i][happyHourProps[i]])
            }
            //use happyHourHeadings array values
            for(let i=0; i < happyHourHeadings.length; i++){
              div = document.createElement('DIV')
              head = document.createElement('H4')
              head.innerText = happyHourHeadings[i]
              div.appendChild(head)
              nodesDiv.insertBefore(div, menuHead)
              hhPropsItems[i].forEach((item)=> {
                var para = document.createElement('P')
                para.innerText = item
                div.appendChild(para)
              })
            }
         }
          if (this.classList.contains("activeMenu")) {

          }
          //mark with border only one menu name and remove border form other
          else if (document.querySelectorAll(".activeMenu").length == 1) {
            var x = document.querySelectorAll(".activeMenu");
            var currentMenu = menuLists[index]
            var currentMenuProps = Object.keys(currentMenu)
            var keyOfkeys = (currentMenu[currentMenuProps])
            var currentMenuPropsProps;

            //show only selected menu, remove others - unmark / mark tab
            for (let i = 0; i < x.length; i++) {
              x[i].classList.remove("activeMenu");
              this.classList.add("activeMenu");
            }
            //remove children nodes, so later can be displayed new
            for(let i = 0; i <= menuInfoDiv.children.length; i++) {
              // console.log(menuInfoDiv.children[i])
              menuInfoDiv.removeChild(menuInfoDiv.children[0])
            }

            //index 5 is where is happyHour property in menuLists array(object)
                  if(index == 5){
                      showHappyHour()
                  }

              //make tab active
                  this.classList.add("activeMenu");
                //
                  var currentMenu = menuLists[index]
                  var currentMenuProps = Object.keys(currentMenu)
                  var keyOfkeys = (currentMenu[currentMenuProps])
                  var currentMenuPropsProps;
                  var menuHead;
                  var headDescription;
                  var subTitles;
                  var content;
                  var pass = 0;

                  //create, append, show data (nodes) for seleted menu tab
                    for(let i=0; i < currentMenu[currentMenuProps].length; i++) {
                       menuHead = document.createElement('H1')
                       headDescription = document.createElement('P')
                       currentMenuPropsProps = Object.keys(keyOfkeys[i])
                       menuHead.innerText = keyOfkeys[i][currentMenuPropsProps].mainTitle
                       headDescription.innerText = keyOfkeys[i][currentMenuPropsProps].mainContent
                       subTitles = keyOfkeys[i][currentMenuPropsProps].subtitle
                       content = keyOfkeys[i][currentMenuPropsProps].content

                       if(subTitles != undefined){
                         var menuHtmlElements;
                         menuHtmlElements = document.createElement('DIV')

                         menuHtmlElements.appendChild(menuHead)
                         menuHtmlElements.appendChild(headDescription)


                       for(let i=0; i < subTitles.length; i++){
                         var  subTitlesNode = document.createElement('H3')
                         var  subTitlesValue = document.createTextNode(subTitles[i])
                         var  contentNode = document.createElement('P')

                      //prevent showing undefined value on the page, making it to be empty string
                        if(content[i] == undefined) {
                          content[i] = ''
                        }

                         var  contentValue = document.createTextNode(content[i])

                           subTitlesNode.appendChild(subTitlesValue)
                           contentNode.appendChild(contentValue)
                           // menuItemDiv.appendChild(subTitlesNode)
                           // menuItemDiv.appendChild(contentNode)
                           menuHtmlElements.appendChild(subTitlesNode)
                           menuHtmlElements.appendChild(contentNode)
                       }

                      //to make HTML structure easier for styling, push items in 2 div
                      //every first property goes in one div, every second in second div
                      //using variable "pass"
                       if(pass == 0) {
                         nodesDiv.appendChild(menuHtmlElements)
                         menuInfoDiv.appendChild(nodesDiv)
                         nodesDiv.classList.add('content-div')

                         if(index == 5){
                           pass = 0
                         }
                         else {
                             pass = 1
                         }
                       }
                         else if(pass == 1) {
                           nodesDiv2.appendChild(menuHtmlElements)
                           menuInfoDiv.appendChild(nodesDiv2)
                           nodesDiv2.classList.add('content-div')

                           if(index == 5){
                             pass = 1
                           }
                           else {
                               pass = 0
                           }
                         }
                     }
          }
        }

    //else for first choose, for others clicks on menu tabs, all work goes on code above, in if statment
      //mark menu name onclick
        else {
          //index 5 is where is happyHour property in menuLists array(object)
            if(index == 5){
              showHappyHour()
            }
            var x = document.querySelectorAll(".activeMenu");

            for (let i = 0; i < x.length; i++) {
              x[i].classList.remove("activeMenu");
            }

            //make tab active
              this.classList.add("activeMenu");
              //
              var currentMenu = menuLists[index]
              var currentMenuProps = Object.keys(currentMenu)
              var keyOfkeys = (currentMenu[currentMenuProps])
              var currentMenuPropsProps;
              var menuHead;
              var headDescription;
              var subTitles;
              var content;
              var pass = 0;

                  //create, append, show data (nodes) for seleted menu tab
                   for(let i=0; i < currentMenu[currentMenuProps].length; i++) {
                      menuHead = document.createElement('H1')
                      headDescription = document.createElement('P')
                      currentMenuPropsProps = Object.keys(keyOfkeys[i])
                      menuHead.innerText = keyOfkeys[i][currentMenuPropsProps].mainTitle
                      headDescription.innerText = keyOfkeys[i][currentMenuPropsProps].mainContent
                      subTitles = keyOfkeys[i][currentMenuPropsProps].subtitle
                      content = keyOfkeys[i][currentMenuPropsProps].content

                      var menuHtmlElements = document.createElement('DIV')

                      menuHtmlElements.appendChild(menuHead)
                      menuHtmlElements.appendChild(headDescription)
                      menuInfoDiv.appendChild(nodesDiv)


                      for(let i=0; i < subTitles.length; i++){
                        // var menuItemDiv = document.createElement('DIV')
                        var  subTitlesNode = document.createElement('H3')
                        var  subTitlesValue = document.createTextNode(subTitles[i])
                        var  contentNode = document.createElement('P')

                    //prevent showing undefined value on the page, making it to be empty string
                        if(content[i] == undefined) {
                          content[i] = ''
                        }

                        var  contentValue = document.createTextNode(content[i])

                          subTitlesNode.appendChild(subTitlesValue)
                          contentNode.appendChild(contentValue)
                          // menuItemDiv.appendChild(subTitlesNode)
                          // menuItemDiv.appendChild(contentNode)
                          menuHtmlElements.appendChild(subTitlesNode)
                          menuHtmlElements.appendChild(contentNode)
                      }

                      //to make HTML structure easier for styling, push items in 2 div
                      //every first property goes in one div, every second in second div
                      //using variable "pass"
                      if(pass == 0) {
                        nodesDiv.appendChild(menuHtmlElements)
                        menuInfoDiv.appendChild(nodesDiv)
                        nodesDiv.classList.add('content-div')

                        if(index == 5){
                          pass = 0
                        }
                        else {
                            pass = 1
                        }

                      }
                        else if(pass == 1) {
                          nodesDiv2.appendChild(menuHtmlElements)
                          menuInfoDiv.appendChild(nodesDiv2)
                          nodesDiv2.classList.add('content-div')

                          if(index == 5){
                            pass = 1
                          }
                          else {
                              pass = 0
                          }
                        }

                    }
                  }
                }
              }

//script for menu list - End
