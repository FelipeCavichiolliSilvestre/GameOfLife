class Cell {
  /*
		Argumentos:
			'x' e 'y' : int, as coordenadas de sua posição, lembrando que (0,0) é o canto superior-direito.
			'width' : int, largura que cada célula possui
	*/
  constructor(x, y, width) {
    /* Soma-se um à ambas coordenadas pois isso
		criará um "gap" entre as células */
    this.x = x;
    this.y = y;
    this.width = width;

    /* As regras do jogo, que determinam se uma célula 
		   estará viva ou morta na próxima geração
		*/

    /* Estado atual e estado futuro, são necessárias 2 variáveis 
		pois as células da próxima geração são calculadas simultaneamente */
    this.alive = false;
    this.nextGen = false;

    // Conterá os vizinhos da células, sendo assim um array de "Cell"
    this.neighbours = [];
  }

  /*
		Com base nas variavéis "this.x", "this.y" e "this.width" desenha a si mesmo no canvas

		Argumentos: void
		Retorno: void
	*/
  drawSelf() {
    /* O aumento em 1 das coordenadas e a diminuição em 2 da largura 
		cria uma espaço entre as células no canvas */
    if (this.alive) {
      CONTEXT.beginPath();
      CONTEXT.fillStyle = cellColor;
      CONTEXT.rect(this.x + 1, this.y + 1, this.width - 2, this.width - 2);
      CONTEXT.fill();
    }
  }

  /*
		"Seta" as célula vizinhas se baseando no grid passado por argumento.
		As células vizinhas são todas aquelas que dividem um vértice com determinada célula.
		Sendo assim, uma célula pode ter 8,5 ou 3 vizinhos

		Argumentos:
			'grid': Cell[][], será a base para identificar quais são os vizinhos da célula.
		Retorno: void
	*/
  setNeighbours(grid) {
    // Limites do grid
    let max_row = grid.length - 1;
    let max_collum = grid[0].length - 1;

    // Posição da célula no grid
    let j = Math.floor(this.x / this.width);
    let i = Math.floor(this.y / this.width);

    /* Os "if"s abaixo testam os limites do grid, 
			e adiciona o vizinho */
    if (i != 0) {
      this.neighbours.push(grid[i - 1][j]); // Superior
      if (j != 0) {
        this.neighbours.push(grid[i - 1][j - 1]); // Superior-esquerda
      }
      if (j < max_collum) {
        this.neighbours.push(grid[i - 1][j + 1]); // Superior-direita
      }
    }

    if (i < max_row) {
      this.neighbours.push(grid[i + 1][j]); // Inferior
      if (j != 0) {
        this.neighbours.push(grid[i + 1][j - 1]); // Inferior Esquerda
      }
      if (j < max_collum) {
        this.neighbours.push(grid[i + 1][j + 1]); // Inferior Direita
      }
    }

    if (j < max_collum) {
      this.neighbours.push(grid[i][j + 1]); // Direita
    }

    if (j != 0) {
      this.neighbours.push(grid[i][j - 1]); // Esquerda
    }
  }

  /*
		Conta quantos vizinhos da célula estão vivos
		e retorna a quantidade

		Argumentos: void
		Retorno: int
	*/
  countNeighboursAlive() {
    let qtd_alives = 0;

    for (var i = 0; i < this.neighbours.length; i++) {
      if (this.neighbours[i].alive) {
        qtd_alives++;
      }
    }

    return qtd_alives;
  }

  /*
		Com base nos vizinhos e nas regras calculará se a 
		celula estará viva ou morta na próxima geração 

		Argumentos: 
			'bornRules' e 'surviveRules': bool[9], as regras do jogo, necessário
			 para determinar o próximo estado da célula
		Retorno: void
	*/
  calculateNextGen(bornRules, surviveRules) {
    let alives = this.countNeighboursAlive();

    // Se está viva e possui os vizinhos necessarios
    if (this.alive && surviveRules[alives]) {
      this.nextGen = true;
    }

    // Se está morta e possui os vizinhos necessarios
    else if (!this.alive && bornRules[alives]) {
      this.nextGen = true;
    }

    // Default
    else {
      this.nextGen = false;
    }
  }

  /*
		Atualiza o estado da célula
		
		Argumentos: void
		Retorno: void
	*/
  update() {
    this.alive = this.nextGen;
  }
}
