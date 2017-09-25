function str(Input) {
	return JSON.stringify(Input);
};

function estr(Input) {
	var special = Input.replace(/(\[)/g, "\[");
	special = special.replace(/(\])/g, "\]");
	special = special.replace(/(\{)/g, "\{");
	special = special.replace(/(\})/g, "\}");
	special = special.replace(/(\.)/g, "\.");
	return JSON.stringify(special);
};

function prs(Input) {
  return JSON.parse(Input);
};

function word(Input) {
	var newword = ""
	if (typeof Input === "boolean") {
		if (Input === false) {
			newword = "False";
		} else if (Input === true) {
			newword = "True";
		} 
	}
	return newword;
}