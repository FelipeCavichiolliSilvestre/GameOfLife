class GameOfLife{
	constructor(){
		let boardObject = new Board()

		this.rulesControl = new RulesControl(boardObject)
		this.generationControl = new GenerationControl(boardObject)
		this.patternControl = new PatternControl(boardObject);

		for (var i = 0; i < patternList.length; i++) {
			var p = patternList[i];
			this.patternControl.insertPattern(p[0], p[1], p[2])
		}
		//this.patternControl.insertPattern(Pattern, Title, Desc)
	}
}