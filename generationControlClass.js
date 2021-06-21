class GenerationControl{
	/*
		Argumentos:
			'boardObject' : Objeto Board, será o objeto Board que terá as gerações controladas
	*/
	constructor(boardObject){
		// A classe Board, é passada pelo construtor para que só exista um objteto Board
		this.boardObj = boardObject;

		// Variavél que armazenará o retorno de window.setInterval()
		this.interval = undefined;

		// A cada quantos milisegundos será gerada uma nova geração
		this.simulationSpeed = 500;

		// Refere-se ao painel de controle de gerações
		this.isHided = false;


		// Adiciona os event listeners para cada botão do painel de controle
		PLAY_BTN.addEventListener("click", this.userClickedPlay.bind(this), false);
		PAUSE_BTN.addEventListener("click", this.userClickedPause.bind(this), false);
		STEP_BTN.addEventListener("click", this.userClickedStep.bind(this), false);
		RESET_BTN.addEventListener("click", this.userClickedReset.bind(this), false);
		GEN_HIDE_BTN.addEventListener("click", this.userClickedHide.bind(this), false);
		SPEED_SLIDE.addEventListener("input", this.userChangedSimulationSpeed.bind(this), false);
	}

	/*	
		Quando o usuário clicar no botão "play", limpa o intervalo antigo, e define um 
		novo com base no tempo de simulação

		Argumentos: void
		Retorno: void
	*/
	userClickedPlay(){
		window.clearInterval(this.interval)
		this.interval = window.setInterval(this.userClickedStep.bind(this), this.simulationSpeed);
	}


	/*	
		Quando o usuário clicar no botão "pause", limpa o intervalo.

		Argumentos: void
		Retorno: void
	*/
	userClickedPause(){
		window.clearInterval(this.interval);
	}

	/*	
		Quando o usuário clicar no botão "step", avança uma geração apenas.

		Argumentos: void
		Retorno: void
	*/
	userClickedStep(){
		this.boardObj.stepForward();
	}

	/*
		Quando o usuário clicar no botão "reset", limpa o intervalo e o tabuleiro (ao criar um novo)

		Argumentos: void
		Retorno: void
	*/
	userClickedReset(){
		this.boardObj.createGrid();
	}

	/*
		Quando o usuário modificar a velocidade da simulação usando o slide, define um novo
		valor para a velocidade da simulação e chama o método 'this.userClickedPlay()' 

		Argumentos: void
		Retorno: void
	*/
	userChangedSimulationSpeed(){
		this.simulationSpeed = SPEED_SLIDE.value;
		this.userClickedPlay();
	}

	/*	
		Quando o botão para esconder o painel de controle for clicado,
		alterna sua visibilidade entre 'none' e 'flex'

		Argumentos: void
		Retorno: void
	*/
	userClickedHide(){
		if (this.isHided){
			GENERATION_DRAWER.style.display = "flex";
			GEN_HIDE_BTN.innerHTML = "<<";

			this.isHided = false
		}
		else{
			GENERATION_DRAWER.style.display = "none";
			GEN_HIDE_BTN.innerHTML = ">>";
			this.isHided = true;
		}
	}
}