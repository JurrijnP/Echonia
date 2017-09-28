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
				Hangman["Chooser"] = Value;
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

function GameHelp(Game, PlayerType) {
	if (Game === "Hangman") {
		if (PlayerType === 0) {
			resp = "{pm}\n\
Hey " + Username + " you are the person to choose the word!\n\
To invite other people you must first do 2 other things:\n\
**1.** You have to set a word by typing `hm?setword <Word>`\n\
For the worldrules type `hm?wordrules`\n\
**2.** You have to set a range of the minimum & maximum amount of gold that can be used to bet.\n\
For more help bet ranging type `e?help Betting Range` in <#290983769840680961>\n\n\
Once you have done the above 2 things you can start inviting people by typing `e?invite Hangman <Mention user here>` in <#290983769840680961>\n\
The user you invited will get a PM with a special code to accept or cancel your invite.\n\
You can invite up to 7 players.\n\n\
Once you have invited everybody you want to invite everybody has to place a bet in the range you set.\n\
When everybody has set a bet you can start the game!\n\n\
You can type `hm?start` and a random order will be created in which each player will get a turn to guess a letter.\n\n\
Once the game ends the player that guessed the word will get 90% of the gold from all bets.\n\
The other 10% will go into the jackpot which you have chance of winning when playing games!\n\
";
		} else if (PlayerType === 1) {
			
		}
	}
};