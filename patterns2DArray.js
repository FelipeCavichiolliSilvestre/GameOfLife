var patternList = [];

/ ESPAÇONAVES /

// GLIDER
var gliderPattern = [[0,1,0],
					 [0,0,1],
					 [1,1,1]
				    ]

var gliderTitle = 'Glider'
var gliderDesc = "O Glider é um dos padrões que consegue percorrer infinitamente o grid do Jogo da Vida. Se move diagonalmente e alterna entre 2 estados."
patternList.push([gliderPattern,gliderTitle,gliderDesc])

// GLIDER GUN
var glidergunPattern = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
				        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
				        [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				        [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				        [1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				        [1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
				        [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
				        [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				        [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		   	           ]

var glidergunTitle = 'Glider Gun'
var glidergunDesc = 'A cada 30 gerações a Glider Gun gera um glider. <br>Esse foi o primeiro glider gun a ser descoberto, também é o menor Glider Gun já encontrado.'
patternList.push([glidergunPattern,glidergunTitle,glidergunDesc])


// LWSS
var lwssPattern = [[0,1,0,0,1],
		           [1,0,0,0,0],
		           [1,0,0,0,1],
		           [1,1,1,1,0],
		          ]


var lwssTitle = 'LWSS'
var lwssDesc = 'LWSS significa Nave Espacial Leve. É um dos padrões que consegue percorrer infinitamente o grid do Jogo da Vida. É "leve" pois entre as Naves Espaciais ela é a menor. <br> Assim como as outras Naves Espaciais, se move horizontalmente/verticalmente e alterna entre 2 estados.'
patternList.push([lwssPattern,lwssTitle,lwssDesc])


// MWSS
var mwssPattern = [[0,0,0,0,0,0],
				   [0,1,0,0,0,1],
		           [1,0,0,0,0,0],
		           [1,0,0,0,0,1],
		           [1,1,1,1,1,0],
		          ]


var mwssTitle = 'MWSS'
var mwssDesc = 'MWSS significa Nave Espacial Média. É um dos padrões que consegue percorrer infinitamente o grid do Jogo da Vida. É "média" pois entre as Naves Espaciais ela possui um tamanho mediano.<br> Assim como as outras Naves Espaciais, se move horizontalmente/verticalmente e alterna entre 2 estados.'
patternList.push([mwssPattern,mwssTitle,mwssDesc]);


// HWSS
var hwssPattern = [[0,0,0,1,1,0,0],
				   [0,1,0,0,0,0,1],
		           [1,0,0,0,0,0,0],
		           [1,0,0,0,0,0,1],
		           [1,1,1,1,1,1,0],
		          ]


var hwssTitle = 'HWSS'
var hwssDesc = 'HWSS significa Nave Espacial Pesada. É um dos padrões que consegue percorrer infinitamente o grid do Jogo da Vida. É "pesada" pois entre as Naves Espaciais ela é a maior.<br> Assim como as outras Naves Espaciais, se move horizontalmente/verticalmente e alterna entre 2 estados.';
patternList.push([hwssPattern,hwssTitle,hwssDesc]);



/ ALTERNADORES /

// BLINKER
var blinkerPattern = [[1,1,1],
			         ]

var blinkerTitle = 'Blinker'
var blinkerDesc = 'O menor padrão que gera uma alternância <br> Alterna entre 2 estados'
patternList.push([blinkerPattern,blinkerTitle,blinkerDesc]);


// TOAD
var toadPattern = [[0,1,1,1],
			       [1,1,1,0],
		          ]

var toadTitle = 'Toad'
var toadDesc = 'Alterna entre 2 estados'
patternList.push([toadPattern,toadTitle,toadDesc]);


// BEACON
var beaconPattern = [[1,1,0,0],
				     [1,1,0,0],
				     [0,0,1,1],
				     [0,0,1,1],
				    ]

var beaconTitle = "Beacon"
var beaconDesc = "Alterna entre 2 estados"
patternList.push([beaconPattern,beaconTitle,beaconDesc]);


// PULSAR
var pulsarPattern = [[0,0,1,1,1,0,0,0,1,1,1,0,0],
				     [0,0,0,0,0,0,0,0,0,0,0,0,0],
				     [1,0,0,0,0,1,0,1,0,0,0,0,1],
				     [1,0,0,0,0,1,0,1,0,0,0,0,1],
				     [1,0,0,0,0,1,0,1,0,0,0,0,1],
				     [0,0,1,1,1,0,0,0,1,1,1,0,0],
				     [0,0,0,0,0,0,0,0,0,0,0,0,0],
				     [0,0,1,1,1,0,0,0,1,1,1,0,0],
				     [1,0,0,0,0,1,0,1,0,0,0,0,1],
				     [1,0,0,0,0,1,0,1,0,0,0,0,1],
				     [1,0,0,0,0,1,0,1,0,0,0,0,1],
				     [0,0,0,0,0,0,0,0,0,0,0,0,0],
				     [0,0,1,1,1,0,0,0,1,1,1,0,0],
				    ]

var pulsarTitle = "Pulsar"
var pulsarDesc = "Alterna entre 3 estados"
patternList.push([pulsarPattern,pulsarTitle,pulsarDesc]);


// pentadecahedron
var pentadecPattern = [[1,1,1],
				              [1,0,1],
				              [1,1,1],
				              [1,1,1],
				              [1,1,1],
				              [1,1,1],
				              [1,0,1],
				              [1,1,1]
				             ]

var pentadecTitle = "Penta Decahedron"
var pentadecDesc = "Alterna entre 15 estados"
patternList.push([pentadecPattern,pentadecTitle,pentadecDesc]);
