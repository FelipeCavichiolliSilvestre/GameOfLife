class PatternControl{
	/*
		Argumentos:
			'gridObject' : Objeto Grid, será o objeto Grid que terá as gerações controladas
	*/
	constructor(gridObject){
		console.log("Pattern Control")

		// A classe Grid, é passada pelo construtor para que só exista um objteto Grid
		this.gridObj = gridObject;

		this.allPatterns = []


		SHOW_PATTERNS_MENU.addEventListener("click", this.userClickedShow)
		COVER.addEventListener("click", this.userClickedHide)
	}

	/*	
		Com base no padrão fornecido por argumento, plotará o mesmo no centro
		do grid 
		
		Argumentos: 
			'pattern' : bool [][], array multidimensional contendo o padrão
		Retorno: void
	*/
	deployPattern(pattern){
		let colluns = this.gridObj.grid[0].length;
		let rows = this.gridObj.grid.length;

		let patternSizeX = pattern[0].length
		let patternSizeY = pattern.length

		// Calcula aonde o padrão deve começar para que fique centralizado
		let startX = Math.floor(colluns / 2) - Math.floor(patternSizeX / 2)
		let startY = Math.floor(rows / 2) - Math.floor(patternSizeY / 2)

		// Caso o padrão seja maior que o grid, retorne
		if (patternSizeX > colluns || patternSizeY > rows) {
			return
		}

		// Reseta o grid
		this.gridObj.createGrid()
		
		// Plota no grid o padrão
		for (let i = 0; i < patternSizeY; i++) {
			for (let g = 0; g < patternSizeX; g++) {
				if(pattern[i][g]){
					this.gridObj.setCellState(i + startY, g + startX, true);
				}
			}
		}

		this.userClickedHide();
	}

	/*	
		Esconde o menu de padrões

		Argumentos: void
		Retorno: void
	*/
	userClickedHide(){
		PATTERN_MENU.style.display = "none";
		COVER.classList.toggle("active", false);
	}

	/*	
		Mostra o menu de padrões

		Argumentos: void
		Retorno: void
	*/
	userClickedShow(){
		PATTERN_MENU.style.display = "flex";
		COVER.classList.toggle("active", true);
	}

	/*	
		Insere um padrão na lista de padões

		Argumentos:
			'patternGrid' : bool [][], o padrão de células vivas
			'title' : string, o nome do padrão
			'desc' : string, descrição de como o padrão age
		Retorno: void
	*/
	insertPattern(pattern, title, desc){
		let newPattern = new Pattern(pattern, title, desc)
		let newPatternBtn = newPattern.btn

		newPatternBtn.addEventListener("click", this.deployPattern.bind(this, newPattern.patternGrid))

		this.allPatterns.push(newPattern)
	}
}