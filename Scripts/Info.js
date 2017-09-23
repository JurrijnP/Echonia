function Info() {
  use echonia;
  var Embed = "";
  if (echonia[UserID]) {
    Embed = "{embed:\
      {type:rich}\
      {color:#bb29f9}\
      {title:	𝖄𝖔𝖚 𝖍𝖆𝖛𝖊 𝖗𝖊𝖖𝖚𝖊𝖘𝖙𝖊𝖉 𝖞𝖔𝖚𝖗 𝖈𝖎𝖙𝖞 𝖉𝖆𝖙𝖆:}\
      {desc:\
𝕮𝖆𝖘𝖍: *" + prs(echonia[UserID])["Cash"] + "*\n𝕭𝖆𝖓𝖐: *" + prs(echonia[UserID])["Bank"] + "*\n𝕰𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖊: *" + prs(echonia[UserID])["Experience"] + "*\n𝕷𝖊𝖛𝖊𝖑: *" + prs(echonia[UserID])["Level"] + "*\n𝕮𝖎𝖙𝖞: *" + prs(echonia[UserID])["City"] + "*\n\
      }\
    }";
  return Embed;
  };
};