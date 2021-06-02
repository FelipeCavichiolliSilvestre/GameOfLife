class DragBar{
	/*  
		Argumentos:
			'div' : Elemento HTML que será arrastado
	   		'bar' : Elemento HTML que será usado para arrastar a 'div'
		
		A única condição para o funcionamento dessa classe é 
		que 'bar' deve estar contida em 'div'
	*/
	constructor(bar, div){
		this.BAR = bar
		this.DIV = div

		this.x_offset = 0;
		this.y_offset = 0;

		this.BAR.addEventListener("dragstart", this.userStartDrag.bind(this))
		this.BAR.addEventListener("drag", this.userIsDragging.bind(this))
	}

	/*
		Quando o usuário começar a arrastar 'this.bar', calcula o offset do clique
		em relação ao canto superior-direito de 'this.div'
		
		Argumentos: void
		Retorno: void
	*/
	userStartDrag(){
		this.x_offset = event.offsetX + this.BAR.offsetLeft
		this.y_offset = event.offsetY + this.BAR.offsetTop
	}

	/*
		Enquanto o usúario estiver arratando 'this.bar', atualiza a posição de
		'this.div'.
		
		Argumentos: void
		Retorno: void
	*/
	userIsDragging(){
		let drag_x = event.x 
		let drag_y = event.y

		if (drag_x != 0 && drag_y != 0){
			//'this.x_offset' e 'this.y_offset' são usados para calcular precisamente o deslocamento da 'this.div'
			// A divisão pelo tamanho da tela e multiplicação por 100 serve para transformar "px" em "vw/vh"
			let pos_x = (drag_x - this.x_offset) / window.innerWidth * 100
			let pos_y = (drag_y - this.y_offset) / window.innerHeight * 100

			this.DIV.style.top = pos_y + "vh"
			this.DIV.style.left = pos_x + "vw"
		}
	}
}