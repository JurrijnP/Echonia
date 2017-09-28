function Help() {
	msg = "";
	if (MainData["Debug"] === "true") {
		if (arguments.length > 0) {
			resp += "```" + str(arguments) + "```\n";
		}
	}
	if (arguments.length === 0) {
		msg = "{del}\n*" + Username + "* haven't given me a topic and subtopic to give you more information about.\nType `e?help Topics` to get a list of all topics.";
	} else if (arguments.length === 1 && arguments[0] === "Topics") {
		msg = "{del}\n{pm}\n{embed:\n\
	{type:rich}\n\
	{title:Help Topics}\n\
	{field[0]|name:Betting}\n\
	{field[0]|value:Subtopics: Range}\n\
	{field[0]|inline:false}\n\
	{footer|icon:https://raw.githubusercontent.com/JurrijnP/Echonia/master/Images/Echonia.png}\n\
}";
	}
	return msg;
};