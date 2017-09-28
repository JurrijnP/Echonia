function Help() {
	if (MainData["Debug"] === "true") {
		if (arguments.length > 0) {
			resp += str(arguments);
		}
	}
	if (arguments.length === 0) {
		msg = "{del}\n*" + Username + "* haven't given me a topic and subtopic to give you more information about.\nType `e?help Topics` to get a list of all topics.";
		return msg;
	} else if (arguments.length === 1 && arguments[0] === "Topics") {
		msg = "{del}\n{pm}\n\
{embed:\
	{type:rich}\
	{Title:Help Topics}\
	{field[0]|title:Betting}\
	{field[0]|value:Subtopics: Range}\
	{field[0]|inline:false}\
	{footer|icon:https://raw.githubusercontent.com/JurrijnP/Echonia/master/Images/Echonia.png}\
}";
		return msg;
	}
};