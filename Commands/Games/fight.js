const { Fight } = require("weky")

module.exports = {
	name: "fight",
	description: "Fight someone",
	category: "Games",
	run: async(client, message, args) => {
		if (!message.mentions.members.first()) {
			return message.reply("You need to mention someone!")
		}
		await Fight({
			message: message,
			opponent: message.mentions.users.first(),
			embed: {
				title: 'Fight',
				color: '#5865F2',
				footer: 'Chronium Games',
				timestamp: true
			},
			buttons: {
			  hit: 'Hit',
			  heal: 'Heal',
			  cancel: 'Stop',
			  accept: 'Accept',
			  deny: 'Deny'
			},
			acceptMessage: '<@{{challenger}}> has challenged <@{{opponent}}> for a fight!',
			winMessage: 'GG, <@{{winner}}> won the fight!',
			endMessage: '<@{{opponent}}> didn\'t answer in time. So, I dropped the game!',
			cancelMessage: '<@{{opponent}}> refused to have a fight with you!',
			fightMessage: '{{player}} you go first!',
			opponentsTurnMessage: 'Please wait for your opponents move!',
			highHealthMessage: 'You cannot heal if your HP is above 80!',
			lowHealthMessage: 'You cannot cancel the fight if your HP is below 50!',
			returnWinner: false,
			othersMessage: 'Only {{author}} can use the buttons!'
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