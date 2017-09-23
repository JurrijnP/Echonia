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
  } else {
    obj["City"] = prs(CurrentObject)["City"];
  }
  if (Cash !== "") {
    obj["Cash"] = Cash;
  } else {
    obj["Cash"] = prs(CurrentObject)["Cash"];
  }
  if (Bank !== "") {
    obj["Bank"] = Bank;
  } else {
    obj["Bank"] = prs(CurrentObject)["Bank"];
  }
  if (Experience !== "") {
    obj["Experience"] = City;
  } else {
    obj["Experience"] = prs(CurrentObject)["Experience"];
  }
  if (Level !== "") {
    obj["Level"] = Level;
  } else {
    obj["Level"] = prs(CurrentObject)["Level"];
  }
  if (City !== "") {
    obj["Game"] = City;
  } else {
    obj["Game"] = prs(CurrentObject)["Game"];
  }
  return str(obj);
};