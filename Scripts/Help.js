function Help() {
	msg = "";
	if (MainData["Debug"] === "true") {
		if (arguments.length > 0) {
			resp += "```" + str(arguments) + "```\n";
		}
	}
	if (arguments.length === 0) {
		msg = "*" + Username + "* you haven't given me a topic and subtopic to give you more information about.\nType `e?help Topics` to get a list of all topics.";
	} else if (arguments.length === 1 && arguments[0] === "Topics") {
		msg = "{embed:\n\
	{type:rich}\n\
	{color:#ffffff}\n\
	{title:Help Topics}\n\
	{field[0]|name:Betting}\n\
	{field[0]|value:Range, Winning, Jackpot}\n\
	{field[0]|inline:false}\n\
	{field[1]|name:Games}\n\
	{field[1]|value:Hangman, Poker, Battleships, Horse Race, Yahtzee}\n\
	{field[1]|inline:false}\n\
	{thumb|url:http://77.174.95.206/Images/Echonia.png}}";
	} else if (arguments.length === 2) {
		if (arguments[0] === "Betting") {
			if (arguments[1] === "Range") {
				msg = "";
			}
		}
	}
	return msg;
};

function GameHelp(Game, PlayerType) {
	if (Game === "Hangman") {
		if (PlayerType === 0) {
			resp = "{" + "pm" + "}\nHey " + Username + " you are the person to choose the word!\n\n\
To invite other people you must first do 1 other thing first:\n\
**1.** You have to set a word by typing `hm?setword <Word>`\n\
For the worldrules type `hm?wordrules`\n\n\n\
Once you have set a word you can start inviting people\nby typing `e?invite Hangman <Mention user here>` in <#290983769840680961>\n\n\
The user you invited will get a PM with a special code to accept or cancel your invite.\n\
You can invite up to 7 players.\n\n\n\n\
If you have invited everybody you want to invite everybody has to place a bet.\n\
When everybody has set a bet you can start the game!\n\n\
You can type `hm?start` and a random order will be created in which each player will get a turn to guess a letter.\n\n\
After the game ends the player that guessed the word will get 90% of the gold from all bets combined.\n\
The other 10% will go into the jackpot which you have chance of winning when playing games!\n\
";
		} else if (PlayerType === 1) {
			hm
		}
	}
};