function str(Input) {
  return JSON.stringify(Input);
};

function prs(Input) {
  return JSON.parse(Input);
};

function word(Input) {
	var newword = ""
	if (typeof Input === "boolean") {
		var firstletter = Input.substr(0, 1);
		var left = Input.substr(0, (Input.length));
		firstletter = firstletter.toUpperCase();
		newword = firstletter + left;
	}
	return newword;
}