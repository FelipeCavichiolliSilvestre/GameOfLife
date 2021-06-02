class GameOfLife{
	constructor(){
		let grid = new Grid()

		this.rulesControl = new RulesControl(grid)
		this.generationControl = new GenerationControl(grid)
	}
}