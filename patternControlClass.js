class PatternControl {
  /*
		Argumentos:
			'boardObject' : Board, será o objeto Board que terá as gerações controladas
	*/
  constructor(boardObject) {
    console.log("Pattern Control");

    // A classe Board, é passada pelo construtor para que só exista um objteto Board
    this.boardObj = boardObject;

    this.allPatterns = [];

    SHOW_PATTERNS_MENU.addEventListener("click", this.userClickedShow);
    COVER.addEventListener("click", this.userClickedHide);
  }

  /*	
		Com base no padrão fornecido por argumento, plotará o mesmo no centro
		do grid 
		
		Argumentos: 
			'patternDraw' : bool [][], array multidimensional contendo o padrão
		Retorno: void
	*/
  deployPattern(patternDraw) {
    let colluns = this.boardObj.grid[0].length;
    let rows = this.boardObj.grid.length;

    console.log(patternDraw);

    let patternSizeX = patternDraw[0].length;
    let patternSizeY = patternDraw.length;

    // Calcula aonde o padrão deve começar para que fique centralizado
    let startX = Math.floor(colluns / 2) - Math.floor(patternSizeX / 2);
    let startY = Math.floor(rows / 2) - Math.floor(patternSizeY / 2);

    // Caso o padrão seja maior que o grid, retorne
    if (patternSizeX > colluns || patternSizeY > rows) {
      return;
    }

    // Reseta o grid do objeto Board
    this.boardObj.createGrid();

    // Plota no grid o padrão
    for (let i = 0; i < patternSizeY; i++) {
      for (let j = 0; j < patternSizeX; j++) {
        if (patternDraw[i][j]) {
          this.boardObj.setCellState(i + startY, j + startX, true);
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
  userClickedHide() {
    PATTERN_MENU.style.display = "none";
    COVER.classList.toggle("active", false);
  }

  /*	
		Mostra o menu de padrões

		Argumentos: void
		Retorno: void
	*/
  userClickedShow() {
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
  insertPattern(patternDraw, title, desc) {
    let newPattern = new Pattern(patternDraw, title, desc);
    let newPatternBtn = newPattern.btn;

    newPatternBtn.addEventListener(
      "click",
      this.deployPattern.bind(this, newPattern.patternDraw)
    );

    this.allPatterns.push(newPattern);
  }
}
