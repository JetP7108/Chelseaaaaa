const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "misthy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh Dz",
  description: "Ảnh misthy",
  commandCategory: "Ảnh",
  usages: "imgmisthy",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
	var link = [
"https://i.imgur.com/rfXezsW.jpg",
"https://i.imgur.com/79drEDT.jpg",
"https://i.imgur.com/8n3MMgs.jpg",
"https://i.imgur.com/DQRP9Kk.jpg",
"https://i.imgur.com/jj3C49T.jpg",
"https://i.imgur.com/Q5r7ZAe.jpg",
"https://i.imgur.com/8gvCOvl.jpg",
"https://i.imgur.com/py36ISI.jpg",
"https://i.imgur.com/AKpSeeB.jpg",
"https://i.imgur.com/ZCOjdSX.jpg",
"https://i.imgur.com/ZUD5F3e.jpg",
"https://i.imgur.com/pRFnQhR.jpg",
"https://i.imgur.com/PzPDHGX.jpg",
"https://i.imgur.com/uG7bgBw.jpg",
"https://i.imgur.com/2rN2g88.jpg",
"https://i.imgur.com/9hHdSB9.jpg",
"https://i.imgur.com/A6TpokY.jpg",
"https://i.imgur.com/FVBdTOc.jpg",
"https://i.imgur.com/rvci5Qw.jpg",
"https://i.imgur.com/ui5oZ6V.jpg",
"https://i.imgur.com/HEyWO48.jpg",
"https://i.imgur.com/IVHkVVI.jpg",
"https://i.imgur.com/dvKFFN6.jpg",
"https://i.imgur.com/t3VAvni.jpg",
"https://i.imgur.com/NKFeIEh.jpg",
"https://i.imgur.com/GpNkuin.jpg",
"https://i.imgur.com/SgyIbyC.jpg",
"https://i.imgur.com/kpjuvkD.jpg",
"https://i.imgur.com/OEJ0srN.jpg",
"https://i.imgur.com/LNBYsXg.jpg",
"https://i.imgur.com/o8ymFvB.jpg",
"https://i.imgur.com/mZPzDYe.jpg",
"https://i.imgur.com/GCBwdPc.jpg",
"https://i.imgur.com/e1UZ6TU.jpg",
"https://i.imgur.com/ifeKYkm.jpg",
"https://i.imgur.com/dFZKTQY.jpg",
"https://i.imgur.com/PX9oQgf.jpg",
"https://i.imgur.com/r6rzMa2.jpg",
"https://i.imgur.com/2Nf1ef5.jpg",
"https://i.imgur.com/7bqSzct.jpg",
"https://i.imgur.com/17MtwUI.jpg",
"https://i.imgur.com/5mu3i0S.jpg",
"https://i.imgur.com/y3Q3Rqh.jpg",
"https://i.imgur.com/0TFpzi4.jpg",
"https://i.imgur.com/B1jHs5j.jpg",
"https://i.imgur.com/zRCdsAb.jpg",
"https://i.imgur.com/C83rKiQ.jpg",
"https://i.imgur.com/R11OlXe.jpg",
"https://i.imgur.com/d9nydPg.jpg",
"https://i.imgur.com/SEjMgWW.png",
"https://i.imgur.com/zDNn8KS.jpg",
"https://i.imgur.com/Up7mAl0.jpg",
"https://i.imgur.com/k8VOfqo.jpg",
"https://i.imgur.com/Ku1OY48.jpg",
"https://i.imgur.com/8MuENCf.jpg",
"https://i.imgur.com/rIyuiNp.jpg",
"https://i.imgur.com/8wmrtSN.jpg",
"https://i.imgur.com/x2wysdn.jpg",
"https://i.imgur.com/4KtkJq7.jpg",
"https://i.imgur.com/3sy5QnE.jpg",
"https://i.imgur.com/xFJPfXR.jpg",
"https://i.imgur.com/rPnrIeE.jpg",
"https://i.imgur.com/xajB51H.jpg",
"https://i.imgur.com/IlP3Ono.jpg",
"https://i.imgur.com/WVMKROq.jpg",
"https://i.imgur.com/bBAXZ5K.jpg",
"https://i.imgur.com/bptmPMa.jpg",
"https://i.imgur.com/3S7npwF.jpg",
"https://i.imgur.com/W8fRtEZ.jpg",
"https://i.imgur.com/g4jVcw3.jpg",
"https://i.imgur.com/3g0grMO.jpg",
"https://i.imgur.com/Fe82ARx.jpg",
"https://i.imgur.com/yaF77LN.jpg",
"https://i.imgur.com/c09ikip.jpg",
"https://i.imgur.com/5tYh5Uo.jpg",
"https://i.imgur.com/57IGYz4.jpg",
"https://i.imgur.com/Ahon94Y.jpg",
"https://i.imgur.com/Dpv0ZjI.jpg",
"https://i.imgur.com/xIrVO03.jpg",
"https://i.imgur.com/5KfJ0qd.jpg",
"https://i.imgur.com/DsStmBB.jpg",
"https://i.imgur.com/jmoIFzM.jpg",
"https://i.imgur.com/dUduzgb.jpg",
"https://i.imgur.com/AihFQTh.jpg",
"https://i.imgur.com/nzI82bJ.jpg",
"https://i.imgur.com/UeFKhIF.jpg",
"https://i.imgur.com/BpDcs0K.jpg",
"https://i.imgur.com/mclt8ap.jpg",
"https://i.imgur.com/1HDU1Gh.jpg",
"https://i.imgur.com/4dP6RUq.jpg",
"https://i.imgur.com/ulmjcML.jpg",
"https://i.imgur.com/yzKBdru.jpg",
"https://i.imgur.com/Ev9mnAL.jpg",
"https://i.imgur.com/KZLJYmj.jpg",
"https://i.imgur.com/3URI4pd.jpg",
"https://i.imgur.com/k64z79l.jpg",
"https://i.imgur.com/Hi0Hotk.jpg",
"https://i.imgur.com/iKhF7nv.jpg",
"https://i.imgur.com/T9MJ8ua.jpg",
"https://i.imgur.com/kx0BlJg.jpg",
"https://i.imgur.com/plilXsa.jpg",
"https://i.imgur.com/mCvpF8B.jpg",
"https://i.imgur.com/B1AIiaM.jpg",
"https://i.imgur.com/V7sLxGP.jpg",
"https://i.imgur.com/EX35IvD.jpg",
"https://i.imgur.com/Mm6QP2E.jpg",
"https://i.imgur.com/wDRiv8X.jpg",
"https://i.imgur.com/MjFHA5Q.jpg",
"https://i.imgur.com/UrWqt6G.jpg",
"https://i.imgur.com/3AHlrrO.jpg",
"https://i.imgur.com/hA4zIY3.jpg",
"https://i.imgur.com/s7DgOiS.jpg",
"https://i.imgur.com/t1geRWx.jpg",
"https://i.imgur.com/3cTtxLR.jpg",
"https://i.imgur.com/rep8vay.jpg",
"https://i.imgur.com/NlcbbNV.jpg",
"https://i.imgur.com/XN75bD0.jpg",
"https://i.imgur.com/Yjjy5ZR.jpg",
"https://i.imgur.com/TycFSFX.jpg",
"https://i.imgur.com/r0wkV4v.jpg",
"https://i.imgur.com/4rSbYS7.jpg",
"https://i.imgur.com/V9PlXPt.jpg",
"https://i.imgur.com/yyedleT.jpg",
"https://i.imgur.com/OjAL5B3.jpg",
"https://i.imgur.com/wWhUQMZ.jpg",
"https://i.imgur.com/RMqwpI1.jpg",
"https://i.imgur.com/aMxvNsl.jpg",
"https://i.imgur.com/nWtjMKF.jpg",
"https://i.imgur.com/XNGUeSJ.jpg",
"https://i.imgur.com/3TBnmIX.jpg",
"https://i.imgur.com/AAL46uo.jpg",
"https://i.imgur.com/foXPJRc.jpg",
"https://i.imgur.com/MzgQ406.jpg",
"https://i.imgur.com/Kzgt1MW.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1000) api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`Ảnh Misthy\nSố Ảnh: ${link.length}\n-1000 đô !`,attachment: fs.createReadStream(__dirname + "/cache/54.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/54.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/54.jpg")).on("close",() => callback());
     }
   };
