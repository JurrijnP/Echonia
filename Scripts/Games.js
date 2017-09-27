use Battleships;
use Hangman;
use Poker;
use Yahtzee;
use MainData;
import "https://raw.githubusercontent.com/JurrijnP/Echonia/master/Scripts/VariableManipulation.js";
import "https://raw.githubusercontent.com/JurrijnP/Echonia/master/Scripts/DataObjects.js";


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

};