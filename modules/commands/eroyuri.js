module.exports.config = {
	name: "eroyuri",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh eroyuri",
	commandCategory: "Hình Ảnh",
	usages: "eroyuri",
	cooldowns: 5
};
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
	axios.get('https://nekos.life/api/v2/img/eroyuri').then(res => {
	let anh = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/ei.${anh}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ei.${anh}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ei.${anh}`)).on("close", callback);
			})
}