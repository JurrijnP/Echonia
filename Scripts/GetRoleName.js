function GetRoleName(Id) {
  var Role = "";
  for (var i = 0; i < ServerRoles.length; i++) {
    if (ServerRoles[i].id === Id) {
      Role = ServerRoles[i].name;
    };
  };
  return Role;
};