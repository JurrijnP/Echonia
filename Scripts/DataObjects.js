function DataObjects(Game, Variable, Value) {
	var Options = {
		"0": "DevMode",
		"1": "Temp",
		"2": "Game",
		"3": "Started",
		"4": "Players",
		"5": "Max"
	};
	// Check if the correct variable type gets entered.
	/*f ((Variable === "0") || (Variable === "2") || (Variable === "3")) {
		if ((typeof prs(Value)) !== "boolean") {
			return resp = "{redirect:296318607112142848}`" + Value + "` is type of *" + (typeof prs(Value)) + "*, Expected type of *Boolean*.";
		}
	}
	if ((Variable === "4") || (Variable === "5")) {
		if ((typeof prs(Value)) !== "number") {
			return resp = "{redirect:296318607112142848}`" + Value + "` is type of *" + (typeof prs(Value)) + "*, Expected type of *Number*.";
		}
	}
	if (Variable === "1") {
		if ((typeof Value) !== "string") {
			return resp = "{redirect:296318607112142848}`" + Value + "` is type of *" + (typeof Value) + "*, Expected type of *String*.";
		}
	}*/
	var Objects = {
		"Hangman": {
			"DevMode": false,
			"Temp": "",
			"Game": false,
			"Started": false,
			"Players": 0,
			"Max": 8
		},
		"Yahtzee": {
			"DevMode": false,
			"Temp": "",
			"Game": false,
			"Started": false,
			"Players": 0,
			"Max": 8
		},
		"Battleships": {
			"DevMode": false,
			"Temp": "",
			"Game": false,
			"Started": false,
			"Players": 0,
			"Max": 2
		},
		"Slotmachine": {
			"DevMode": false
		},
		"Jackpot": {
			"Lucky Number": 5157,
			"Amount": 10000,
			"Enabled": []
		}
	};
	var obj = Objects[Game];
	obj[(Options[Variable])] = Value;
	obj = str(obj);
	return obj;
}