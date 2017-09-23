function UserObject(CurrentObject, City, Cash, Bank, Experience, Level, Game) {
	var obj = {
		"City": "",
		"Cash": 0,
		"Bank": 0,
		"Experience": 0,
		"Level": 0,
		"Game": ""
	};
  if (City !== "") {
    obj["City"] = City;
  } else if (City === "Reset") {
    obj["City"] = "Echonia Castle";
  } else {
    obj["City"] = prs(CurrentObject)["City"];
  }
  if (Cash !== "") {
    obj["Cash"] = Cash;
  } else if (Cash === "Reset") {
    obj["Cash"] = 50;
  } else {
    obj["Cash"] = prs(CurrentObject)["Cash"];
  }
  if (Bank !== "") {
    obj["Bank"] = Bank;
  } else if (Bank === "Reset") {
    obj["Bank"] = 0;
  } else {
    obj["Bank"] = prs(CurrentObject)["Bank"];
  }
  if (Experience !== "") {
    obj["Experience"] = City;
  } else if (Experience === "Reset") {
    obj["Experience"] = 0;
  } else {
    obj["Experience"] = prs(CurrentObject)["Experience"];
  }
  if (Level !== "") {
    obj["Level"] = Level;
  } else if (Level === "Reset") {
    obj["Level"] = 0;
  } else {
    obj["Level"] = prs(CurrentObject)["Level"];
  }
  if (City !== "") {
    obj["Game"] = City;
  } else if (Game === "Reset") {
    obj["Game"] = "";
  } else {
    obj["Game"] = prs(CurrentObject)["Game"];
  }
  return str(obj);
};