const { NeverHaveIEver } = require("weky");

module.exports = {
	name: "neverhaveiever",
	description: "Never have I ever",
	run: async(client, message, args) => {
		await NeverHaveIEver({
			message: message,
			embed: {
				title: 'Never Have I Ever',
				color: '#5865F2',
				footer: 'Chronium Games',
				timestamp: true
			},
			thinkMessage: 'I am thinking',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
			buttons: { optionA: 'Yes', optionB: 'No' }
		});
	}
}
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */