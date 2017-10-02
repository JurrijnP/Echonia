function Info() {
  use Echonia;
  var Embed = "";
  if (Echonia[UserID]) {
    Embed = "{embed:\
      {type:rich}\
      {color:#bb29f9}\
      {title:	𝖄𝖔𝖚 𝖍𝖆𝖛𝖊 𝖗𝖊𝖖𝖚𝖊𝖘𝖙𝖊𝖉 𝖞𝖔𝖚𝖗 𝖈𝖎𝖙𝖞 𝖉𝖆𝖙𝖆:}\
      {desc:\
𝕮𝖆𝖘𝖍: *" + prs(Echonia[UserID])["Cash"] + "*\n\
𝕭𝖆𝖓𝖐: *" + prs(Echonia[UserID])["Bank"] + "*\n\
𝕰𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖊: *" + prs(Echonia[UserID])["Experience"] + "*\n\
𝕷𝖊𝖛𝖊𝖑: *" + prs(Echonia[UserID])["Level"] + "*\n\
𝕮𝖎𝖙𝖞: *" + prs(Echonia[UserID])["City"] + "*\n\
      }\
    }";
  return Embed;
  };
};