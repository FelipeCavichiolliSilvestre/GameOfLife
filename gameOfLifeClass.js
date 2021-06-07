class GameOfLife{
	constructor(){
		let grid = new Grid()

		this.rulesControl = new RulesControl(grid)
		this.generationControl = new GenerationControl(grid)
		this.patternControl = new PatternControl(grid);

		for (var i = 0; i < patternList.length; i++) {
			var p = patternList[i];
			this.patternControl.insertPattern(p[0], p[1], p[2])
			
		}

		
		//this.patternControl.insertPattern(Pattern, Title, Desc)
		

	}
}