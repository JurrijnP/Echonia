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
<<<<<<< HEAD
	var msg = "{del}";
	var Game = Params;
	if (RawID !== MentionID) {
		if (Echonia[MentionID]) {
			if (prs(Echonia[MentionID])["City"] === "Sanctuary Halls") {
				if (prs(MainData[Game])["Game"] === true) {
					if (Game === "Hangman") {
						if (Hangman["Chooser"] === RawID) {
							if (prs(MainData["Hangman"])["Players"] < 8) {
								msg += "{msg:*<@" + RawID + ">* you have succesfully created an invite for *<@" + MentionID + ">* to play a game of " + Game + ".}" + createInvite(RawID, MentionID, Game) + "\n{ars:inviteSniffer}";
								var invite = {
									"User": MentionID,
									"Game": Game;
								};
								Invite[MentionID] = str(invite);
							} else {
								msg += "You already invited 7 other people.";
							}
						}
					}
				}
			} else {
				msg += "*<@" + MentionID + ">* has not travelled to Sanctuary Halls yet.";
			}
		} else {
			msg += "*<@" + MentionID + ">* was not found in the main database.";
		}
	} else {
		msg += "You did not mention anybody.";
	}
	return msg;
};

function createInvite(RawID, MentionID, Game) {
	var msg = "{redirect:364380344847433738}";
	var Color = {
		"Hangman": "#0000BB",
		"Battleships": "#CC0000",
		"Poker": "#DD00DD",
		"Yahtzee": "#00DD00"
	}
	msg += "{embed:\n\
{type:rich}\n\
{color:" + Color[Game] + "}\n\
{title:Invite for: " + Game + "}\n\
{desc:\
You have been invited to play Hangman!\n\
Type `e?invite Hangman accept` or `e?invite Hangman cancel` to accept/cancel your invitation.\n\n\
This invitation will expire in 2 minutes.\n\
*<@" + MentionID + ">*\n\
}\n\
}";
	return msg;
=======
	var Games = ["Hangman", "Poker", "Battleships", "Yahtzee"];
	var Game = "";
	var msg = "";
	if (Params in Games) {
		Game = Params;
		if (prs(Maindata[Game])["Game"] === true) {
			if (Game === "Hangman") {
				if (Hangman["Chooser"] === RawID) {
					if (Hangman["Players"] < 8) {
						msg = "You have succesfully invited *<@" + MentionID + ">* for a game of " + Game + ".\nThe invitation will expire after 1 minute.\n{ars:sendInvite}";
					} else {
						msg = "You already invited 7 other players.";
					}
				} else {
					msg = "{del}";
				}
			}
		} else {
			msg = "{del}";
		}
	} else {
		msg = "That game was not found please try again.";
	}
	return msg;
>>>>>>> a59778b20f368c9de0cf5c421bed6c8f11c804f7
};