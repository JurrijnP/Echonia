function Games(Game, Variable, Value) {
	/*
		Variable meanings:
			0 = GameCreation
			1 = PlayerAdd
			2 = GameStart
			3 = GameUpdate
			4 = GameEnd
	*/
	if (Game === "Hangman") {
		switch(Variable) {
			case 0:
				Hangman["Chooser"] = {
					"ID": Value,
					"Bet": 0
				}
				Hangman["Word"] = "";
				Hangman["Letters"] = str([]);
				Hangman["Guessers"] = str([]);
				Hangman["Mistakes"] = 0;
				break;
			case 1:
				DataObjects(Confirmation, 4, (prs(MainData["Hangman"])["Players"] + 1));
				var arr = prs(Hangman["Guessers"]);
				arr[(arr.length)] = Value;
				Hangman["Guessers"] = str(arr);
				break;
			default:
				resp += "ProcessError: Case was not selected.";
				if (MainData["Debug"] === "true") {
					resp += "\n**Games Function argument values**\nGame: " + Game + "(" + typeof Game + ")\nVariable: " + Variable + "(" + typeof Variable + ")\nValue: " + Value;
				};
				break;
		}
	}
};

function wordChecker(Word) {
	var obj = GetJSON("http://api.wordnik.com:80/v4/words.json/search/" + Word + "?caseSensitive=false&minCorpusCount=5&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&skip=0&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5");
	if (obj["searchResults"][0]["count"] > 0) {
		return true;
	} else {
		return false;
	}
};

function invite(RawID, MentionID, Params) {

	
};