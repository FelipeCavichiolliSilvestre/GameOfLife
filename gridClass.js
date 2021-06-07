class Grid{
	constructor(){
		this.grid = undefined
		this.cell_width = 15

		this.win_width = window.innerWidth;
		this.win_height = window.innerHeight;
		
		CANVAS.width = this.win_width;
		CANVAS.height = this.win_height;

		/*
			Regras para a simulação, Game Of Life possui uma notação x/y
			sendo 'x' e 'y' um conjunto de números.
			'x' se refere aos números de vizinhos necessarios para ocorrer um nascimento
			'y' se refere aos números de vizinhos necessarios para uma célúla continuar viva
			Qualquer outro caso a célula morre
		*/

		this.bornRules = [false, false, false, true, false, false, false, false, false]
		this.surviveRules = [false, false, true, true, false, false, false, false, false]

		// Setup Inicial
		this.createGrid()

		// event.listeners
		CANVAS.addEventListener("click", this.userClickedCanvas.bind(this), false)
		window.addEventListener("resize", this.userResizedWindow.bind(this), false)
	}

	/*
		Desenha cada célula presente na váriavel "this.grid" no canvas

		Argumentos: void
		Retorno: void
	*/
	drawGrid(){
		// Cobre totalmente o canvas com uma cor
		CONTEXT.fillStyle = backGroundColor;
		CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height);

		let colluns = Math.floor(this.win_width / this.cell_width);
		let rows = Math.floor(this.win_height / this.cell_width);

		// Para cada célula, desenhe-a na tela
		for (var i = 0; i < rows; i++) {
			for (var g = 0; g < colluns; g++) {
				this.grid[i][g].drawSelf()
			}
		}
	}

	/*
		Com base no tamanho da célula e do tamanho da tela, cria
		um array 2D de objetos "Cell" e o atribui para a variável "this.grid"
		
		Argumentos: void
		Retorno: void
	*/
	createGrid(){
		let colluns = Math.floor(this.win_width / this.cell_width);
		let rows = Math.floor(this.win_height / this.cell_width);

		// Variável que receberá as células
		var newGrid = [];
		
		
		// Popula o newGrid com células
		for (var i = 0; i < rows; i++) {
			var r = [];
			for (let g = 0; g < colluns; g++) {
				let x_pos = g * this.cell_width;
				let y_pos = i * this.cell_width;

				let cell = new Cell(x_pos, y_pos, this.cell_width);
				r.push(cell);
			}
			newGrid.push(r);
		}


		// Para cada célula no novo grid, "seta" os seus vizinhos
		for (let i = 0; i < rows; i++) {
			for (let g = 0; g < colluns; g++) {
				newGrid[i][g].setNeighbours(newGrid);
			}
		}


		// Atualiza o valor de grid
		this.grid = newGrid;
		this.drawGrid()
	}

	/*
		Para cada célula do grid calcula qual será o seu estado
		na próxima geração usando as regras da variável "rules".
		Após isso atualiza o estado e enfim chama a função para desenhar a nova geração

		Argumentos: void
		Retorno: void
	*/
	stepForward(){
		let colluns = this.grid[0].length;
		let rows = this.grid.length;

		for (let i = 0; i < rows; i++) {
			for (let g = 0; g < colluns; g++) {
				this.grid[i][g].calculateNextGen(this.bornRules, this.surviveRules);
			}
		}

		for (let i = 0; i < rows; i++) {
			for (let g = 0; g < colluns; g++) {
				this.grid[i][g].update()
			}
		}

		this.drawGrid();
	}


	/*
		Ativada por um evento, captura a posição que ocorreu 
		um clique no canvas einverte o estado da célula naquela posição

		Argumentos: void
		Retorno: void
	*/
	userClickedCanvas(){
		//Captura a posição do mouse quando foi clicado
		let mouse_x = event.clientX
		let mouse_y = event.clientY
		event.preventDefault();

		/* 
			Com base na posição do mouse e no tamanho de cada célula
			calcula os indexes	
		*/
		let i = Math.floor(mouse_y / this.cell_width)
		let g = Math.floor(mouse_x / this.cell_width)


		if (this.grid[i][g].alive){
			this.setCellState(i, g, false)
		}
		else{
			this.setCellState(i, g, true)
		}

		return false
	}


	/*
		Ativada por um evento, cria um novo grid com base
		nas novas dimensões da janela

		Argumentos: void
		Retorno: void
	*/
	userResizedWindow(){
		this.win_width = window.innerWidth;
		this.win_height = window.innerHeight;

		CANVAS.width = this.win_width;
		CANVAS.height = this.win_height;

		this.createGrid();
	}


	/*
		Atualiza as regras para que uma célula possa nascer
		
		Argumentos: 
			'newRules' : bool[9], a novas regras de nascimento que substituirão a atual
		Retorno: void
	*/
	updateBornRules(newRules){
		this.bornRules = newRules;
	}


	/*
		Atualiza as regras para que uma célula possa sobreviver
		
		Argumentos: 
			'newRules' : bool[9], a novas regras de sobrevivência que substituirão a atual
		Retorno: void
	*/
	updateSurviveRules(newRules){
		this.surviveRules = newRules;
	}

	/*
		Define o estado de uma célula
		
		Argumentos: 
			'i','g' : int, posição do grid que determinada 
			'state' : bool, valor que define o estado da célula
		Retorno: void
	*/
	setCellState(i, g, state){
		this.grid[i][g].alive = state;
		this.grid[i][g].nextGen = state;
		
		this.drawGrid()
	}
}