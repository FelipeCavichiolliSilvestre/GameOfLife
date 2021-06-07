/*
<div class="pattern">
	<div class="pattern-left">
		<img></img>
	</div>

	<div class="pattern-right">
		<h1></h1>
		<p></p>
		<button>Testar padrão</button>
	</div>
</div>

*/


class Pattern{
	/*
		Argumentos:
			'patternGrid' : bool [][], o padrão de células vivas
			'title' : string, o nome do padrão
			'description' : string, descrição de como o padrão age
	*/
	constructor(patternGrid, title, description){

		this.patternGrid = patternGrid;
		this.descriptionText = description;
		this.titleText = title

		/* Botão que plota o padrão no grid */
		this.btn = undefined;

		/* Elemento HTML a ser inserido no documento*/
		this.div = undefined;

		this.createDiv();
		this.insertDiv();
	}

	/*	
		Cria a div principal contendo a imagem do padrão, o título, a descrição 
		e o botão para plotar 

		Argumentos: void
		Retorno: void
	*/
	createDiv(){
		this.div = document.createElement("div");
		this.div.classList.add("pattern");

		var left = this.createLeft();
		var right = this.createRight();

		this.div.appendChild(left);
		this.div.appendChild(right);
	}

	/*	
		Cria a div esquerda contendo a imagem do padrão

		Argumentos: void
		Retorno: <div>
	*/
	createLeft(){
		let leftDiv = document.createElement("div");
		leftDiv.classList.add("pattern-left");

		let img = this.createImage();

		leftDiv.appendChild(img);
		console.log(typeof(leftDiv))

		return leftDiv;
	}

	/*	
		Cria a imagem do padrão

		Argumentos: void
		Retorno: <img>
	*/
	createImage(){
		let image = document.createElement("img")
		image.src = this.patternToURL();

		return image;
	}

	/*	
		Cria a URL ao desenhar 'this.patternGrid' em um canvas e converter-o
		em uma URL

		Argumentos: void
		Retorno: string, url pronta para ser utilizada como 'img.src'
	*/
	patternToURL(){
		var cellWidth = 20;
		var canva = document.createElement("canvas");
		canva.width = cellWidth * this.patternGrid[0].length;
		canva.height = cellWidth * this.patternGrid.length;
		var context = canva.getContext("2d");

		let x = 0;
		let y = 0;

		for (let i = 0; i < this.patternGrid.length; i++){
			for (var g = 0; g < this.patternGrid[0].length; g++) {
				if(this.patternGrid[i][g]){
					x = g * cellWidth
					y = i * cellWidth


					context.beginPath();
					context.fillStyle = cellColor;
					context.rect(x + 1, y + 1, cellWidth - 2, cellWidth - 2);
					context.fill();
				}
			}
		}

		return canva.toDataURL()
	}

	/*	
		Cria a div direita contendo o título do padrão, a descrição e o botão para plotar

		Argumentos: void
		Retorno: <div>
	*/
	createRight(){
		let rightDiv = document.createElement("div")
		rightDiv.classList.add("pattern-right")

		let title = this.createTitle();
		let desc = this.createDescription();
		let button = this.createButton();

		rightDiv.appendChild(title);
		rightDiv.appendChild(desc);
		rightDiv.appendChild(button);

		return rightDiv
	}

	/*	
		Cria o botão para plotar o padrão

		Argumentos: void
		Retorno: <button>
	*/
	createButton(){
		let btn = document.createElement("button");
		btn.innerHTML = "Testar padrão";
		this.btn = btn

		return btn;
	}

	/*	
		Cria a descrição do padrão

		Argumentos: void
		Retorno: <p>
	*/
	createDescription(){
		let desc = document.createElement("p");
		desc.innerHTML = this.descriptionText;

		return desc;
	}

	/*	
		Cria o título do padrão

		Argumentos: void
		Retorno: <h1>
	*/
	createTitle(){
		let title = document.createElement("h1");
		title.innerHTML = this.titleText;

		return title;
	}	

	/*	
		Insere 'this.div' no menu de padrões 

		Argumentos: void
		Retorno: void
	*/
	insertDiv(){
		PATTERNS_AREA_DIV.appendChild(this.div)
	}
}