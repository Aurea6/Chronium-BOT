const { LieSwatter } = require("weky");

module.exports = {
	name: "lieswatter",
	description: "Is it a lie?",
	run: async(client, message, args)=>{
		await LieSwatter({
			message: message,
			embed: {
				title: 'Lie Swatter',
				color: '#5865F2',
				footer: 'Chronium Games',
				timestamp: true
			},
			thinkMessage: 'I am thinking',
			winMessage:
				'GG, It was a **{{answer}}**. You got it correct in **{{time}}**.',
			loseMessage: 'Better luck next time! It was a **{{answer}}**.',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
			buttons: { true: 'Truth', lie: 'Lie' }
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