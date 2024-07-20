//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "255711607169";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUpLZzdGUmNGODRXYWZldmlubUhWajlIcUFBbUdlNktMV09PdHJFcG5GMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpsNjJTYW95TDZNZzFoWG1zM1gzMlFsK0l0RHh0Q0hMYkRuNkxxRDIzND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVR0Y2U2t1TVkzTmI1V0VDd0JQRGhaNmoyOXdHMHR6SnpOaUtuOUFuSlZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuTkpmN0RCY05zS1lHaEp4eXg1Z2VxWDAyS1Y0cjVwaWd4S0Z6Mk1TekVBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRMcmFNRVREeTB6Y2hqUkJFTWRCZ1dROXRucGZ2RThVYVdDYkFIM0xsMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ1ZXo0QTF3VDBEN2VySU1zRnZlUFFxT3RXSGgwWXF6K3FZSkJ1cHFER1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxaem1VaWRSczVoVEorSllHWnlaakl4U2xaS2JIQkxWR0RNanhhUHFIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTJ3cndNR1VDd3J3bHUzODQ2cHdWNUZ6M0hnckh2SDc1bFdRRWsyaFZIQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdiUmhJL2FWVXY2ZDZ3NExSamllQTVIMG43SVgweDFQZzRCS0x4eTNEVk5VZnBOdzRqQlZSeU5kblEwaklnSFRVRytTcndEaWExQ2R4WUtKcXV1cml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJnYlVOMW9LWlY3dGJobFAwZFhnL1JMbXlJTGF3R2E4TnZVd0VkYWEvVnVZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhMVBuU21pd1NORzRnTW9GeFRTQUpnIiwicGhvbmVJZCI6IjQ3MWM3NjkxLWQ0N2ItNDdjNC04OTE2LTEzM2M1ZmM3YzNmYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTW9FRzdqZnFveUE0NHNmeVFBVERoNVQ5TVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiem5rb3F5bEloRk1Eczh4Yk9TT2VDTEo1WStNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1LTEhSTVo0IiwibWUiOnsiaWQiOiIyNTU3MTE2MDcxNjk6MjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGFuY2VjYW5hIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPNzNxdnNCRU5PYTc3UUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDM2FxMmdwUFpxT01YTW1SaUQ4elVGUnZ4bzhXZVB0YWdHKzlpcGY5Sm04PSIsImFjY291bnRTaWduYXR1cmUiOiJLZ2lvc0pXYmE1YkpaK2RDbk05dVM0NXFUa1V6cHR2M0RvS2ZHY2FMSkd0eUNvSEhpbmNDTkRnTW1wTytrSlVWOVQ4MXVIcVQ0UDd1eFlFMFdZZUVCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMGh3ZW5hbUI2ZlF1T2lZKzQyVVFqL0ZHV0VCNWVnTndtaFUrYVl3c2hxSm1VRk5XRWk4T0ZxcHlNNTJmamQ1OUhlSC8vcTY2U3RzWG5DMUgwS1IyaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3MTE2MDcxNjk6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXQycXRvS1QyYWpqRnpKa1lnL00xQlViOGFQRm5qN1dvQnZ2WXFYL1NadiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTQ4NjY4OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJRC8ifQ==
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
