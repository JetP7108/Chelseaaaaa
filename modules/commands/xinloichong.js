module.exports.config = {
name: "xinloichong",
version: "1.0.0",
hasPermssion: 0,
credits: "NTKhang",
description: "Xin lα»i chα»ng yΓͺu π’π₯Ί\nCredits: NTKhang",
commandCategory: "other",
usages: "[xinloichongiu] @tag hoαΊ·c [xin lα»i chα»ng iu @tag]",
cooldowns: 5
}
module.exports.run = async function ({api, args, Users, event, Currencies, Threads, client}) {
var fs = require("fs-extra");
  var axios = require("axios");
 
  var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("Tag ngΖ°α»i bαΊ‘n muα»n xin lα»i", event.threadID);
  var emoji = ["β₯οΈ","β€οΈ","π","π","π","π","π€","π","π","π","π","π","π","π","π","π ","π","π","π","βοΈ","π","π","π"];

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];

  var love = ((await axios.get("http://ntkhang.xtgem.com/bikini.json")).data).love;
  var linklove = love[Math.floor(Math.random() * love.length)];
 
  var getlove = (await axios.get(linklove, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + "/cache/love.gif", Buffer.from(getlove, "utf-8"));
  let Avatar = (await axios.get( `https://graph.facebook.com/${mention}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
    fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
  let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
    fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
   
  var imglove = [];
      imglove.push(fs.createReadStream(__dirname + "/cache/love.gif"));
      imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
      imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
 
  let dt = await api.getUserInfo(event.senderID);
  let data = await api.getUserInfo(mention);
  let name_1 = dt[event.senderID].name;
  let name_2 = data[parseInt(mention)].name;
 
  api.changeNickname( `Vα»£ yΓͺu cα»§a ${name_2} ${random_emoji}`, event.threadID, parseInt(event.senderID) );
  api.changeNickname( `Chα»ng yΓͺu cα»§a ${name_1} ${random_emoji}`, event.threadID, parseInt(mention) );
 
  var arraytag = [];
      arraytag.push({id: event.senderID, tag: name_1});
      arraytag.push({id: mention, tag: name_2});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("Em YΓͺu Chα»ng β€οΈ");
setTimeout(() => {a("Em Xin Lα»i Chα»ng π₯Ί")} , 2500);
setTimeout(() => {a("Chα»ng Δα»«ng GiαΊ­n Em Nα»―a MΓ  π₯Ίπ₯Ί")} , 2500);
setTimeout(() => {a("Xin Vui LΓ²ng Δα»£i 5p Δα» Chα»ng YΓͺu HαΊΏt GiαΊ­n Rα»i NhαΊ―n βοΈβοΈβοΈ")} , 2500);
setTimeout(() => {a("Tha Lα»i Cho Em Nha Chα»ng Ζ i π₯Ίπ­")} , 2500);
setTimeout(() => {a({body: name_1+" "+"π"+" "+name_2, mentions: arraytag, attachment: imglove}, )} , 2500);
 
 
};

module.exports.event = async function({ api, args, Users, event, Currencies, Threads, client
}) {
 
  var fs = require("fs-extra");
  var axios = require("axios");
  let {body} = event;
  var indexOf = function(value) {return body.indexOf(value) != -1};
   
  if(indexOf("xin lα»i chα»ng iu") || indexOf("xin lα»i chα»ng yΓͺu") || indexOf("xin lα»i chα»ng yΓͺu") || indexOf("xin lα»i chα»ng iu")) {
  var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("Tag ngΖ°α»i bαΊ‘n muα»n xin lα»i", event.threadID);
  var emoji = ["β₯οΈ","β€οΈ","π","π","π","π","π€","π","π","π","π","π","π","π","π","π ","π","π","π","βοΈ","π","π","π"];

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];

  var love = ((await axios.get("http://ntkhang.xtgem.com/bikini.json")).data).love;
  var linklove = love[Math.floor(Math.random() * love.length)];
 
  var getlove = (await axios.get(linklove, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + "/cache/love.gif", Buffer.from(getlove, "utf-8"));
  let Avatar = (await axios.get( `https://graph.facebook.com/${mention}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
    fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
  let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
    fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
   
  var imglove = [];
      imglove.push(fs.createReadStream(__dirname + "/cache/love.gif"));
      imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
      imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
 
  let dt = await api.getUserInfo(event.senderID);
  let data = await api.getUserInfo(mention);
  let name_1 = dt[event.senderID].name;
  let name_2 = data[parseInt(mention)].name;
 
  api.changeNickname( `Vα»£ yΓͺu cα»§a ${name_2} ${random_emoji}`, event.threadID, parseInt(event.senderID) );
  api.changeNickname( `Chα»ng yΓͺu cα»§a ${name_1} ${random_emoji}`, event.threadID, parseInt(mention) );
 
  var arraytag = [];
      arraytag.push({id: event.senderID, tag: name_1});
      arraytag.push({id: mention, tag: name_2});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("Em YΓͺu Chα»ng β€οΈ");
setTimeout(() => {a("Em Xin Lα»i Chα»ng π₯Ί")} , 2500);
setTimeout(() => {a("Chα»ng Δα»«ng GiαΊ­n Em Nα»―a MΓ  π₯Ίπ₯Ί")} , 2500);
setTimeout(() => {a("Xin Vui LΓ²ng Δα»£i 5p Δα» Chα»ng YΓͺu HαΊΏt GiαΊ­n Rα»i NhαΊ―n βοΈβοΈβοΈ")} , 2500);
setTimeout(() => {a("Tha Lα»i Cho Em Nha Chα»ng Ζ i π₯Ίπ­")} , 2500);
setTimeout(() => {a({body: name_1+" "+"π"+" "+name_2, mentions: arraytag, attachment: imglove}, )} , 2500);
 
  }
}