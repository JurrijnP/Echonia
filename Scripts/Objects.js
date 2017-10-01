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
	"Poker": {
		"DevMode": false,
		"Temp": "",
		"Game": false,
		"Started": false,
		"Players": 0,
		"Max": 9
	},
	"Slotmachine": {
		"DevMode": false
	},
	"Jackpot": {
		"Lucky Number": 5157,
		"Amount": 10000,
		"Enabled": false
	},
	"User": {
		"Cash":	50,
		"Bank":	2500,
		"City": "Echonia",
		"Level": 1,
		"Experience": 0
	}
};

function getObject(Input) {
	if (Objects[Input]) {
		return Objects[Input];
	} else {
		return undefined;
	}
};