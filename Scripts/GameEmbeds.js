function UpdateEmbed(Game) {
	var GameEmbeds = {
		"Battleships": {
			"Message": 361225544043593738,
			"Color": "#CC0000",
			"Banner": "Battleship.jpg"
		},
		"Hangman": {
			"Message": 361225761274724354,
			"Color": "#0000BB",
			"Banner": "Hangman.jpg"
		},
		"Yahtzee": {
			"Message": 361227727514107917,
			"Color": "#00DD00",
			"Banner": "Yahtzee.png"
		},
		"Poker": {
			"Message": 361228194331754507,
			"Color": "#DD00DD",
			"Banner": "Poker.jpg"
		}
	};
	var Message = "{redirect:360433513625026562}\
	{edit:" + GameEmbeds[Game]["Message"] + "}\
	{embed:\
		{type:rich}\
		{color:" + GameEmbeds[Game]["Color"] + "}\
		{title:" + Game + "}\
		{desc:\
Game made: " + word(prs(MainData[Game])["Game"]) + "\n\
Started: " + word(prs(MainData[Game])["Started"]) + "\n\
Players: " + prs(MainData[Game])["Players"] + "\n\
Max Players: " + prs(MainData[Game])["Max"] + "\n\
Under Development: " + word(prs(MainData[Game])["DevMode"]) + "\
		}\
		{image|url:https://raw.githubusercontent.com/JurrijnP/Echonia/master/Game%20Banners/" + GameEmbeds[Game]["Banner"] + "}\
	}";
return Message;
}