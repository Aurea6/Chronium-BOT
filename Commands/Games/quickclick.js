const { QuickClick } = require("weky");

module.exports = {
	name: "quickclick",
	description: "Quickly click a button",
	run: async(client, message, args) => {
		await QuickClick({
			message: message,
			embed: {
				title: 'Quick Click',
				color: '#5865F2',
				footer: 'Chronium Games',
				timestamp: true
			},
			time: 60000,
			waitMessage: 'The buttons may appear anytime now!',
			startMessage:
				'First person to press the correct button will win. You have **{{time}}**!',
			winMessage: 'GG, <@{{winner}}> pressed the button in **{{time}} seconds**.',
			loseMessage: 'No one pressed the button in time. So, I dropped the game!',
			emoji: '👆',
			ongoingMessage:
				"A game is already runnning in <#{{channel}}>. You can't start a new one!"
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