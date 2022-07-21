
const { WouldYouRather } = require("weky") 

module.exports = {
  name: "wyr",
  description: "play wouldyourather cmd!",
  aliases: ["wouldyourather"],
  run: async (client, message, args) => {



await WouldYouRather({
	message: message,
	embed: {
		title: 'Would you rather... | Lunar Development',
		color: '#5865F2',
        footer: '©️ Lunar Development',
		timestamp: true
	},
	thinkMessage: 'I am thinking',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttons: { optionA: 'Option A', optionB: 'Option B' }
});
  }}