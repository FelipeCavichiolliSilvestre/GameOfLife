class RulesControl{
	/*  
		Argumentos: 
			'grid': Objeto Grid, será o Objeto Grid que sofrerá as mudanças das regras
	*/
	constructor(grid){
		// A classe Grid, é passada pelo construtor para que só exista um objteto Grid
		this.grid = grid

		this.dragBar = new DragBar(RULES_DRAG_BAR, RULES_MENU)
		
		this.isHided = false;

		//Adiciona os event listeners para todas as checkboxs
		for (var i = 0; i < BORN_CHECKBOX.length; i++) {
			BORN_CHECKBOX[i].addEventListener("input", this.userChangedBornRules.bind(this))
		}

		for (var i = 0; i < ALIVE_CHECKBOX.length; i++) {
			ALIVE_CHECKBOX[i].addEventListener("input", this.userChangedSurviveRules.bind(this))
		}

		RULES_HIDE_BTN.addEventListener("click", this.userClickedHide.bind(this))
	}

	/*	
		Quando uma mudança ocorrer nas regras de nascimento, essa função
		capturará os novos valores e chamará a função da classe Grid para atualizar
		as regras

		Argumentos: void
		Retorno: void
	*/
	userChangedBornRules(){
		let newBornRule = []

		for (var i = 0; i < BORN_CHECKBOX.length; i++) {
			newBornRule.push(BORN_CHECKBOX[i].checked)
		}

		this.grid.updateBornRules(newBornRule)
	}

	/*	
		Quando uma mudança ocorrer nas regras de nascimento, essa função
		capturará os novos valores e chamará a função da classe Grid para atualizar
		as regras

		Argumentos: void
		Retorno: void
	*/
	userChangedSurviveRules(){
		let newSurviveRule = []

		for (var i = 0; i < ALIVE_CHECKBOX.length; i++) {
			newSurviveRule.push(ALIVE_CHECKBOX[i].checked)
		}


		this.grid.updateSurviveRules(newSurviveRule)
	}

	/*	
		Quando o botão para esconder o painel de controle for clicado,
		alterna sua visibilidade entre 'none' e 'flex'

		Argumentos: void
		Retorno: void
	*/
	userClickedHide(){
		if (this.isHided){
			RULES_DRAWER.style.display = "flex";
			RULES_HIDE_BTN.style.transform = "translate(0,-50%) rotate(0deg)"
			this.isHided = false
		}
		else{
			RULES_DRAWER.style.display = "none";
			RULES_HIDE_BTN.style.transform = "translate(0,-50%) rotate(180deg)"
			this.isHided = true;
		}
	}
}